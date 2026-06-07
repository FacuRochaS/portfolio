import { Injectable } from '@angular/core';
import alasql from 'alasql';

@Injectable({ providedIn: 'root' })
export class DatabaseService {

  constructor() {
    this.initializeDatabase();
  }

  private initializeDatabase() {
    // 1. Crear las 5 tablas
    alasql('CREATE TABLE marcas (id INT PRIMARY KEY, nombre STRING)');
    alasql('CREATE TABLE clientes (id INT PRIMARY KEY, nombre STRING, email STRING)');
    alasql('CREATE TABLE productos (id INT PRIMARY KEY, id_marca INT, nombre STRING, precio DECIMAL)');
    alasql('CREATE TABLE facturas (id INT PRIMARY KEY, id_cliente INT, fecha DATE)');
    alasql('CREATE TABLE detalles (id_factura INT, id_producto INT, cantidad INT, precio_unitario DECIMAL)');

    // 2. Insertar MARCAS
    alasql(`INSERT INTO marcas VALUES
                                (1, 'Xiaomi'),
                                (2, 'Western Digital'),
                                (3, 'Corsair'),
                                (4, 'Logitech'),
                                (5, 'AMD'),
                                (6, 'Intel'),
                                (7, 'Samsung'),
                                (8, 'Jaguar')`);

    // 3. Insertar CLIENTES
    alasql(`INSERT INTO clientes VALUES
                                  (1, 'Facundo Rocha', 'facurochaseret@gmail.com'),
                                  (2, 'Empresa TuPyme', 'compras@tupyme.com.ar'),
                                  (3, 'Usuario Demo', 'demo@laboratorio.com'),
                                  (4, 'Juan Perez', 'jperez@gmail.com'),
                                  (5, 'Campus Norte UNC', 'admin@campusnorte.unc.edu.ar')`);

    // 4. Insertar PRODUCTOS
    alasql(`INSERT INTO productos VALUES
                                   (1, 1, 'Xiaomi Buds 6 Play', 45.99),
                                   (2, 2, 'SSD 1TB NVMe PCIe 4.0', 89.99),
                                   (3, 3, 'RAM 16GB DDR4 3200MHz', 55.50),
                                   (4, 4, 'Auriculares Gaming G Pro', 129.00),
                                   (5, 5, 'Procesador Ryzen 5 5600X', 199.99),
                                   (6, 4, 'Mouse Inalambrico G305', 39.99),
                                   (7, 7, 'Monitor Curvo 24 pulgadas', 149.00),
                                   (8, 8, 'Zapatillas Urbanas', 65.00),
                                   (9, 2, 'Disco Externo 2TB HDD', 79.50)`);

    // 5. Insertar FACTURAS (Fechas distribuidas)
    alasql(`INSERT INTO facturas VALUES
                                  (100, 1, '2025-09-15'),
                                  (101, 2, '2025-11-20'),
                                  (102, 1, '2026-01-10'),
                                  (103, 5, '2026-04-05'),
                                  (104, 3, '2026-06-01')`);

    // 6. Insertar DETALLES DE FACTURA
    alasql(`INSERT INTO detalles VALUES
                                  -- Compra 100: Facundo comprando componentes
                                  (100, 2, 1, 89.99),
                                  (100, 3, 2, 55.50),
                                  -- Compra 101: TuPyme comprando periféricos
                                  (101, 6, 5, 39.99),
                                  (101, 7, 2, 149.00),
                                  -- Compra 102: Facundo comprando cosas casuales y almacenamiento
                                  (102, 1, 1, 45.99),
                                  (102, 8, 1, 65.00),
                                  (102, 9, 1, 79.50),
                                  -- Compra 103: UNC comprando procesadores
                                  (103, 5, 10, 199.99),
                                  -- Compra 104: Usuario Demo con auriculares
                                  (104, 4, 1, 129.00)`);
  }


  execute(query: string): any[] {
    return alasql(query);
  }
}
