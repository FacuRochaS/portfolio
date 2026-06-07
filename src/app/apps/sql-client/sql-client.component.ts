import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../core/services/database.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-sql-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sql-client.component.html',
  styleUrl: './sql-client.component.css'
})
export class SqlClientComponent {
  db = inject(DatabaseService);
  i18n = inject(I18nService);

  // Consulta por defecto guardada en una constante para no perderla
  readonly defaultQuery = `SELECT c.nombre AS 'Cliente', f.fecha, p.nombre AS 'Producto', d.cantidad, (d.cantidad * d.precio_unitario) AS 'Total'
                           FROM facturas f
                                  JOIN clientes c ON f.id_cliente = c.id
                                  JOIN detalles d ON d.id_factura = f.id
                                  JOIN productos p ON d.id_producto = p.id;`;

  currentQuery = this.defaultQuery;

  // Historial de consultas para poder volver atrás
  queryHistory: string[] = [this.defaultQuery];

  results: any[] = [];
  columns: string[] = [];
  errorMessage: string | null = null;
  successMessage: string | null = null;

  tables = ['clientes', 'productos', 'marcas', 'facturas', 'detalles'];

  constructor() {
    this.runQuery();
  }

  runQuery() {
    this.errorMessage = null;
    this.successMessage = null;
    this.columns = [];
    this.results = [];

    if (!this.currentQuery.trim()) return;

    // Guardar en el historial si no existe y no está vacío
    if (!this.queryHistory.includes(this.currentQuery)) {
      // Mantenemos solo las últimas 10 consultas para no saturar la UI
      if(this.queryHistory.length > 9) this.queryHistory.pop();
      this.queryHistory.unshift(this.currentQuery);
    }

    try {
      const res = this.db.execute(this.currentQuery);

      if (typeof res === 'number') {
        this.successMessage = `${this.i18n.translations()['sql_rows_affected']}: ${res}`;
      }
      else if (Array.isArray(res)) {
        this.results = res;
        if (this.results.length > 0) {
          this.columns = Object.keys(this.results[0]);
        } else {
          this.successMessage = this.i18n.translations()['sql_no_data'];
        }
      }
    } catch (error: any) {
      this.errorMessage = error.message || 'Error de sintaxis SQL';
    }
  }

  loadTableSelect(tableName: string) {
    this.currentQuery = `SELECT * FROM ${tableName};`;
    this.runQuery();
  }

  // Nueva función para limpiar el editor
  newQuery() {
    this.currentQuery = '';
    this.results = [];
    this.columns = [];
    this.errorMessage = null;
    this.successMessage = null;
  }

  // Nueva función para cargar una consulta del historial
  loadFromHistory(query: string) {
    this.currentQuery = query;
    this.runQuery();
  }
}
