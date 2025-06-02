import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import * as XLSX from "xlsx";

const categorias = {
  SKALA: [
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Abacate",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Acachonados",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Amidinho de Milho",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Amido de Milho",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Argila Branca",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Babosa",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Banana e Bacuri",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Banho de Cristal",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Bomba de Biotina",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Bomba de Vitaminas AH",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Cacau",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Café Verde",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Caju E Murumuru",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Ceramidas G3",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Coquetel Brasil",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Coquetel de Frutas Family",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Divina Cor",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Divino Potao",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Divino Potinho Kids",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Dona Skala",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Fresa/ Morango",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Gelatina Capilar Cachos",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Genetiqs",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Jaborandi",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Keratina Vegetal",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Lama Negra",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Leite Vegetal",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Maionese",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Mais Cachinhos",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Mais Cachos",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Mais Crespinhos",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Mais Crespos",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Mais Lisos",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Manga E Castanha",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Manteiga de Karité",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Maracujá",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Óleo de Argan",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Óleo de Coco",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Potao Desmaiado",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Potao Do Amor",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Raizes do Morro",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Sandia / Melancia",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Skala 12 en 1",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Uva",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Vinagre de Maca",
    "Tarro Skala 1000 Gr - Crema para peinar y tratamiento - Vitamina C + Colágeno",
    "Set Capilar - Shampoo + Acondicionador 325ml - Acachonados",
    "Set Capilar - Shampoo + Acondicionador 325ml - Abacate",
    "Set Capilar - Shampoo + Acondicionador 325ml - Amidinho de Milho",
    "Set Capilar - Shampoo + Acondicionador 325ml - Amido de Milho",
    "Set Capilar - Shampoo + Acondicionador 325ml - Amor Poderoso",
    "Set Capilar - Shampoo + Acondicionador 325ml - Babosa",
    "Set Capilar - Shampoo + Acondicionador 325ml - Banana",
    "Set Capilar - Shampoo + Acondicionador 325ml - Biotina",
    "Set Capilar - Shampoo + Acondicionador 325ml - Bomba de Vitaminas AH",
    "Set Capilar - Shampoo + Acondicionador 325ml - Cacau",
    "Set Capilar - Shampoo + Acondicionador 325ml - Café Verde",
    "Set Capilar - Shampoo + Acondicionador 325ml - Caju e Murumuru",
    "Set Capilar - Shampoo + Acondicionador 325ml - Ceramidas G3",
    "Set Capilar - Shampoo + Acondicionador 325ml - Crespinho Divino",
    "Set Capilar - Shampoo + Acondicionador 325ml - Crespo Divino",
    "Set Capilar - Shampoo + Acondicionador 325ml - Divina Cor",
    "Set Capilar - Shampoo + Acondicionador 325ml - Genetiqs",
    "Set Capilar - Shampoo + Acondicionador 325ml - Glicolico",
    "Set Capilar - Shampoo + Acondicionador 325ml - Jaborandi",
    "Set Capilar - Shampoo + Acondicionador 325ml - Mais Cachinhos",
    "Set Capilar - Shampoo + Acondicionador 325ml - Mais Cachos",
    "Set Capilar - Shampoo + Acondicionador 325ml - Mais Crespinhos",
    "Set Capilar - Shampoo + Acondicionador 325ml - Mais Lisos",
    "Set Capilar - Shampoo + Acondicionador 325ml - Manga E Castanha",
    "Set Capilar - Shampoo + Acondicionador 325ml - Manteiga Karlté",
    "Set Capilar - Shampoo + Acondicionador 325ml - Maracujá",
    "Set Capilar - Shampoo + Acondicionador 325ml - Melancia/Sandia",
    "Set Capilar - Shampoo + Acondicionador 325ml - Morango/Fresa",
    "Set Capilar - Shampoo + Acondicionador 325ml - Óleo de Argan",
    "Set Capilar - Shampoo + Acondicionador 325ml - Óleo de Coco",
    "Set Capilar - Shampoo + Acondicionador 325ml - Raizes do Morro",
    "Set Capilar - Shampoo + Acondicionador 325ml - Uva",
    "Set Capilar - Shampoo + Acondicionador 325ml - Skala 12 en 1",
    "Set Capilar - Shampoo + Acondicionador 325ml - Skalinha Bebé",
    "Set Capilar - Shampoo + Acondicionador 325ml - Vinagre de Maca",
    "Set Capilar - Shampoo + Acondicionador 325ml - Vitamina C + Colágeno",
    "Crema Skala 3 en 1 - Amido de Milho 250g",
    "Crema Skala 3 en 1 - Bomba de Vitaminas con Acido Hialuronico SOS - 250g",
    "Crema Skala 3 en 1 - Camomila Bebé 200ml",
    "Crema Skala 3 en 1 - Crespo Divino 250g",
    "Crema Skala 3 en 1 - Divino Potinho 250g",
    "Crema Skala 3 en 1 - Dona Skala 250g",
    "Crema Skala 3 en 1 - Mais Cachos 250g",
    "Crema Skala 3 en 1 - Mais Cachinhos 250g",
    "Gel Líquido - Day After Cachos 250g",
    "Roll-On - Love Intense 60ml",
    "Rolo-On Fun Sport 60ml",
    "Shampoo Bebé Camomila 325ml",
    "Shampoo Matizador 325ml",
    "Spray Desenredante - Crespinho Divino 250ml",
    "Crema Skala 3 en 1 - Abacate 250g",
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
