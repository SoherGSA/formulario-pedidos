import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import * as XLSX from "xlsx";

const categorias = {
  SKALA: [
    "Aceite Skala - Rícino y Queratina 100ml",
    "Ampolla Skala - Reparación 3 Minutos 15ml",
    "Crema Skala 3 en 1 - Abacate 250g",
    // Agrega aquí los demás productos de SKALA...
  ],
  REZO: [
    "REZO CURL MANIFEST SHAMPOO 500ml",
    "REZO CURL MANIFEST ACONDICIONADOR 500ml",
    "REZO CURL MANIFEST CREMA PEINAR 250ml",
    // Agrega aquí los productos de REZO...
  ],
  VITARAIN: [
    "Filtro de ducha Vitarain - Lavender",
    "Filtro de ducha Vitarain - Citrus",
    "Filtro de ducha Vitarain - Floral",
  ],
  OTROS: [
    "Cepillo Flexible de Ducha",
  ],
};

export default function FormularioPedidos() {
  const [nombre, setNombre] = useState("");
  const [pedido, setPedido] = useState({});
  const [comentarios, setComentarios] = useState("");

  const handleCantidad = (producto, cantidad) => {
    // Convertimos la cantidad a número y actualizamos el estado
    const cantidadNumerica = parseInt(cantidad) || 0;
    setPedido({ ...pedido, [producto]: cantidadNumerica });
  };

  const handleSubmit = () => {
    // Filtramos y preparamos los datos para exportar
    const datos = Object.entries(pedido)
      .filter(([_, cantidad]) => cantidad > 0)
      .map(([producto, cantidad]) => ({ producto, cantidad }));

    const worksheet = XLSX.utils.json_to_sheet(datos);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Pedido");
    XLSX.writeFile(workbook, `Pedido_${nombre}.xlsx`);

    alert("Pedido registrado correctamente. Se ha exportado a Excel.");
  };

  return (
    <div className="grid gap-4 p-6 max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-4 grid gap-4">
          <h2 className="text-xl font-semibold">Formulario de Pedido</h2>
          <Input
            placeholder="Nombre del cliente o NIT"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          {Object.entries(categorias).map(([categoria, productos]) => (
            <div key={categoria} className="mt-4">
              <h3 className="text-lg font-bold text-gray-700 mb-2">{categoria}</h3>
              {productos.map((producto) => (
                <div
                  key={producto}
                  className="grid grid-cols-2 items-center gap-2 mb-2"
                >
                  <label>{producto}</label>
                  <Input
                    type="number"
                    min="0"
                    placeholder="Cantidad"
                    value={pedido[producto] || ""}
                    onChange={(e) => handleCantidad(producto, e.target.value)}
                  />
                </div>
              ))}
            </div>
          ))}

          <Textarea
            placeholder="Comentarios adicionales (opcional)"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />

          <Button onClick={handleSubmit}>Enviar Pedido</Button>
        </CardContent>
      </Card>
    </div>
  );
}
