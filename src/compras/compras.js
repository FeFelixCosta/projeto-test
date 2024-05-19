const calcularTotal = (ferramentas, comprar) => {
    if (!ferramentas.length || !comprar.length) {
      throw new Error("Ambas as listas precisam ter ao menos um item.");
    }
  
    const ferramentasDesejadas = ferramentas.filter((ferramenta) =>
      comprar.includes(ferramenta.nome)
    );
  
    if (!ferramentasDesejadas.length) {
      throw new Error("Nenhuma ferramenta desejada encontrada.");
    }
  
    const total = ferramentasDesejadas.reduce((soma, ferramenta) => soma + ferramenta.preco, 0);
  
    return `O valor a pagar pelas ferramentas (${comprar.join(", ")}) é R$ ${total.toFixed(2)}.`;
  };

  module.exports = { calcularTotal }