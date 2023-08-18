const amigosDoFace = ["Ana", "Pedro", "Maria", "João"];
const amigosDoFaceDoKaian = ["João", "Pedro", "Fernanda", "Gabriel"];

const amigosEmComum = [];

for (let i = 0; i < amigosDoFace.length; i++) {
    for (let j = 0; j < amigosDoFaceDoKaian.length; j++) {
        if (amigosDoFace[i] === amigosDoFaceDoKaian[j]) {
            amigosEmComum.push(amigosDoFace[i]);
        }
    }
}

console.log("Amigos em comum:");
for (let i = 0; i < amigosEmComum.length; i++) {
    console.log(amigosEmComum[i]);
}
