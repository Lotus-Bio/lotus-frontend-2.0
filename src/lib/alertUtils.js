export function gerarAlertas(dados) {
  const alertas = [];

  // Temperatura
  const t = Number(dados.temperatura);
  if (t < 25 || t > 45) {
    alertas.push({
      id: "temp-critico",
      type: "error",
      title: "Temperatura crítica",
      description:
        "Risco de parada ou degradação da atividade microbiana. Verifique imediatamente!",
      time: Date.now(),
    });
  } else if ((t >= 25 && t < 30) || (t > 40 && t <= 45)) {
    alertas.push({
      id: "temp-atencao",
      type: "warning",
      title: "Temperatura fora do ideal",
      description:
        "Temperatura ainda tolerável, mas fora da faixa ideal de biodigestão.",
      time: Date.now(),
    });
  } else if (t >= 30 && t <= 40) {
    alertas.push({
      id: "temp-ok",
      type: "success",
      title: "Temperatura ideal",
      description: "Temperatura ideal para biodigestão.",
      time: Date.now(),
    });
  }

  // Umidade
  const u = Number(dados.umidade);
  if (u < 30 || u > 80) {
    alertas.push({
      id: "umidade-critico",
      type: "error",
      title: "Umidade crítica",
      description:
        "Nível de umidade fora dos limites seguros. Pode causar falhas ou corrosão.",
      time: Date.now(),
    });
  } else if ((u >= 30 && u < 40) || (u > 70 && u <= 80)) {
    alertas.push({
      id: "umidade-atencao",
      type: "warning",
      title: "Umidade fora do ideal",
      description:
        "Nível fora do ideal, pode afetar sensores ou leitura de dados.",
      time: Date.now(),
    });
  } else if (u >= 40 && u <= 70) {
    alertas.push({
      id: "umidade-ok",
      type: "success",
      title: "Umidade ideal",
      description: "Nível de umidade adequado.",
      time: Date.now(),
    });
  }

  // Metano
  const g = Number(dados.metano);
  if (g > 2000) {
    alertas.push({
      id: "gas-critico",
      type: "error",
      title: "Vazamento grave",
      description: "Alta concentração de gás. Verifique ventilação e riscos!",
      time: Date.now(),
    });
  } else if (g > 1000 && g <= 2000) {
    alertas.push({
      id: "gas-atencao",
      type: "warning",
      title: "Gás acumulado",
      description: "Acúmulo de gás elevado. Verifique ventilação.",
      time: Date.now(),
    });
  } else if (g >= 200 && g <= 1000) {
    alertas.push({
      id: "gas-ok",
      type: "success",
      title: "Produção de gás ideal",
      description: "Produção normal de gás metano.",
      time: Date.now(),
    });
  }

  return alertas;
}
