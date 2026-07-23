// Utilitários

function show(id, html) {
  const el = document.getElementById('res-' + id);
  el.innerHTML = html;
  el.classList.add('visivel');
}

function revelarCard(id) {
  const card = document.getElementById('card-' + id);
  card.classList.remove('card-oculto');
  card.classList.add('card-revelar');
  setTimeout(() => { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
}

// Apresentação

function execApresentacao() {
  const nome = document.getElementById('inp-nome').value.trim();
  if (!nome) { alert('Digite seu nome!'); return; }

  show(0, `
    <div class="res-apresentacao">
      <div class="saudacao">Olá, ${nome}! Tudo bem? 👋</div>
      <div class="satirico">
        Se alguém te disser que para aprender programação não é necessário saber matemática... <strong>Não acredite.</strong><br>
        Estão te enganando! 😄
      </div>
      <span class="vamos">Vamos lá!</span>
    </div>
  `);

  document.getElementById('inp-nome').disabled = true;
  document.getElementById('btn-0').disabled = true;

  setTimeout(() => revelarCard(1), 400);
}

// Tabuada

function execTabuada() {
  const num = parseInt(document.getElementById('inp-tab').value);
  if (isNaN(num)) { alert('Digite um número válido!'); return; }

  let html = '';
  for (let i = 1; i <= 10; i++) {
    html += `<div>${i} × ${num} = <span class="ok">${i * num}</span></div>`;
  }
  show(1, html);

  setTimeout(() => revelarCard(2), 400);
}

// Números Pares

function execPares() {
  const inputs = document.querySelectorAll('.inp-par');
  const lista = Array.from(inputs).map(el => parseInt(el.value));
  if (lista.some(isNaN)) { alert('Preencha todos os campos!'); return; }

  const pares = lista.filter(n => n % 2 === 0);

  let html = `<div class="muted">Lista: [${lista.join(', ')}]</div><br>`;
  if (pares.length === 0) {
    html += `<span class="err">Nenhum número par encontrado.</span>`;
  } else {
    html += `<div>Pares encontrados: ${pares.map(p => `<span class="badge badge-ok">${p}</span>`).join('')}</div>`;
  }
  show(2, html);

  setTimeout(() => revelarCard(3), 400);
}

// Soma de Dígitos

function execSoma() {
  const numero = parseInt(document.getElementById('inp-soma').value);
  if (isNaN(numero) || numero <= 10) { alert('Digite um número maior que 10!'); return; }

  const digitos = String(numero).split('').map(Number);
  const total = digitos.reduce((s, d) => s + d, 0);

  show(3,
    `<div class="muted">Dígitos: ${digitos.map(d => `<span class="badge badge-blue">${d}</span>`).join('')}</div><br>
     <div>Soma dos dígitos de <strong>${numero}</strong> = <span class="ok">${total}</span></div>`
  );

  setTimeout(() => revelarCard(4), 400);
}

// Fatorial

function execFatorial() {
  const fat = parseInt(document.getElementById('inp-fat').value);
  if (isNaN(fat) || fat < 0) { alert('Digite um número inteiro positivo!'); return; }

  let fatorial = 1n;
  for (let i = 1n; i <= BigInt(fat); i++) fatorial *= i;

  show(4,
    `<div>O fatorial de <strong>${fat}</strong> é:</div><br>
     <div class="ok" style="word-break:break-all;font-size:0.78rem">${fatorial}</div>`
  );

  setTimeout(() => revelarCard(5), 400);
}

// Números Primos

function execPrimo() {
  const primo = parseInt(document.getElementById('inp-primo').value);

  if (isNaN(primo) || primo <= 1) {
    show(5,
      `<span class="badge badge-err">⚠ Valor inválido</span><br><br>
       <span class="err">O número precisa ser maior que 1. Tente novamente.</span>`
    );
    return;
  }

  let ehPrimo = true;
  let divisor = null;
  for (let i = 2; i < primo; i++) {
    if (primo % i === 0) { ehPrimo = false; divisor = i; break; }
  }

  if (ehPrimo) {
    show(5,
      `<span class="badge badge-ok">✓ Primo</span><br><br>
       <span class="ok">${primo} é um número primo!</span>`
    );
  } else {
    show(5,
      `<span class="badge badge-err">✗ Não primo</span><br><br>
       <span class="err">${primo} não é primo — divisível por ${divisor}.</span>`
    );
  }

  // Revela o botão de reiniciar ao concluir o último exercício
  setTimeout(() => {
    const ar = document.getElementById('area-reiniciar');
    ar.style.display = 'block';
    ar.classList.add('card-revelar');
  }, 400);
}

// Reiniciar

function reiniciar() {
  window.location.reload();
}
