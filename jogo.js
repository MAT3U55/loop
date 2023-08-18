const numeroSecreto = 22;
let tentativas = 0;

for (let i = 0; i < 10; i++) {
    const palpiteAtual = parseInt(prompt("Digite seu palpite:"));

    if (palpiteAtual === numeroSecreto) {
        alert("Parabéns! Você acertou!");
        break;
    } else {
        tentativas++;
        if (tentativas >= 5) {
            alert(`Você esgotou suas tentativas. O número secreto era: ${numeroSecreto}`);
            break;
        }
    }
}