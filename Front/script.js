document.getElementById('registroForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const user_id = document.getElementById('user_id').value;
    const entrada = document.getElementById('entrada').value;
    const saida = document.getElementById('saida').value;

    const response = await fetch('/registro_ponto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: user_id,
            entrada: entrada,
            saída: saida
        })
    });

    if (response.ok) {
        alert('Registro de ponto inserido com sucesso!');
    } else {
        alert('Erro ao inserir registro de ponto.');
    }
});