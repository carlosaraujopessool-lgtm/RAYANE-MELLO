function agendar(){

  const nome = document.getElementById("nome").value;

  const telefone = document.getElementById("telefone").value;

  const servico = document.getElementById("servico").value;

  const data = document.getElementById("data").value;

  const hora = document.getElementById("hora").value;

  const numero = "5584SEUNUMERO";

  const mensagem =
`✨ AGENDAMENTO ✨

👤 Nome: ${nome}

📞 Contato: ${telefone}

💄 Serviço: ${servico}

📅 Data: ${data}

⏰ Hora: ${hora}`;

  const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
