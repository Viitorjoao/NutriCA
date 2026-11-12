// Página: Vitória Catarina Nutrição (visitante ainda não logado)
// Todo o CSS e o HTML são injetados via JavaScript.

const estilos = `
:root{--p:#d4206a;--bg:#fff0f6;--ink:#1a1a1a;--mut:#9b4a6e;--line:#fbd5e5;--card:#fff0f6;--w:#fff;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
html{scroll-behavior:smooth;scroll-padding-top:90px;height:100%}
*{box-sizing:border-box;margin:0}
body{font-family:Inter,system-ui,sans-serif;background:#fff;color:var(--ink)}
.c{max-width:1200px;margin:0 auto;padding:0 36px}
a{text-decoration:none;color:inherit}
button{font:inherit;cursor:pointer}
.btn{background:var(--p);color:#fff;border:1px solid var(--p);border-radius:8px;padding:12px 22px;font-size:14px;font-weight:600}
.btn.o{background:#fff;color:var(--p)}
.btn.w{background:#fff;color:var(--ink);border-color:var(--line)}
header{position:sticky;top:env(safe-area-inset-top,0px);background:#fff;border-bottom:1px solid var(--line);z-index:5}
header .c{display:flex;align-items:center;justify-content:space-between;height:63px;gap:16px}
.chip{display:flex;align-items:center;gap:10px;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:8px 12px;text-align:left}
.av{width:30px;height:30px;border-radius:50%;background:var(--p);color:#fff;display:grid;place-items:center;font-weight:700;font-size:14px}
.chip b{display:block;font-size:14px}.chip small{font-size:11px;color:var(--mut);letter-spacing:.5px}
nav{display:flex;gap:24px;font-size:13px;font-weight:500}
.hr{display:flex;gap:16px}
.instagram-link{display:grid;place-items:center;width:42px;height:42px;border:1px solid var(--line);border-radius:12px;background:#fff;color:var(--p);transition:transform .2s,box-shadow .2s}
.instagram-link:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(212,32,106,.14)}
.instagram-link svg{width:21px;height:21px}
.hero{position:relative;isolation:isolate;overflow:hidden;background:radial-gradient(ellipse at 78% 48%,rgba(246,181,207,.45),transparent 34%),linear-gradient(125deg,#fff7fa 0%,#ffe8f1 55%,#fff1f6 100%);padding:clamp(54px,7vw,88px) 0 clamp(58px,7vw,84px)}
.hero::before{content:"";position:absolute;z-index:-1;width:460px;height:460px;border:1px solid rgba(212,32,106,.09);border-radius:50%;right:-150px;top:-220px;box-shadow:0 0 0 34px rgba(212,32,106,.025),0 0 0 72px rgba(212,32,106,.02)}
.hero .c{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr);gap:clamp(40px,7vw,96px);align-items:center}
.hero-copy{max-width:650px}
.badge{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:6px 12px;font-size:11px;font-weight:600;letter-spacing:1.2px;color:var(--p)}
.badge:before{content:"";width:6px;height:6px;border-radius:50%;background:var(--p)}
h1{font-size:clamp(40px,4.5vw,64px);line-height:1.04;letter-spacing:-.045em;margin:24px 0 20px;font-weight:750;max-width:680px}h1 span{color:var(--p)}
.hero p{color:#8e4665;font-size:17px;line-height:1.75;max-width:490px}
.bt{display:flex;gap:14px;margin:28px 0 38px;flex-wrap:wrap}
.hero .btn{border-radius:12px;padding:14px 22px;box-shadow:0 8px 20px rgba(212,32,106,.14);transition:transform .2s,box-shadow .2s}
.hero .btn:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(212,32,106,.2)}
.hero .btn.w{box-shadow:0 5px 16px rgba(120,39,74,.06)}
.st{display:flex;gap:clamp(18px,3vw,42px);padding-top:22px;border-top:1px solid rgba(171,78,117,.2);max-width:590px}.st div{font-size:17px;font-weight:650;line-height:1.3;flex:1}.st small{display:block;font-size:12px;color:var(--mut);font-weight:400;margin-top:4px}.st b{font-size:24px;letter-spacing:-.03em}
.ph{position:relative;width:100%;height:520px;max-width:500px;margin-left:auto}
.pic{position:absolute;inset:0;border-radius:0;border:0;overflow:visible;background:transparent;box-shadow:none;display:block}
.showcase{position:absolute;inset:0;z-index:1;overflow:visible;border-radius:0;background:transparent}
.showcase-slide{position:absolute;left:2%;top:11%;width:42%;height:78%;border-radius:22px;overflow:hidden;opacity:.9;box-shadow:0 12px 30px rgba(74,26,47,.2);transition:left .85s cubic-bezier(.2,.75,.2,1),top .85s,width .85s,height .85s,transform .85s,opacity .85s,filter .85s;pointer-events:none;filter:saturate(.82)}
.showcase-slide.active,.showcase-slide[data-position="0"]{left:26%;top:6%;width:48%;height:88%;z-index:3;opacity:1;transform:rotate(0) scale(1);pointer-events:auto;filter:none}
.showcase-slide[data-position="1"]{left:56%;top:11%;width:42%;height:78%;z-index:2;opacity:.9;transform:rotate(7deg) scale(.96)}
.showcase-slide[data-position="2"]{left:2%;top:11%;width:42%;height:78%;z-index:1;opacity:.9;transform:rotate(-7deg) scale(.96)}
.showcase-slide img{display:block;width:100%;height:100%;object-fit:cover}
.showcase-fallback{display:none;position:absolute;inset:0;place-items:center;padding:32px;text-align:center;color:#8d3c61;font-size:15px;font-weight:600;background:linear-gradient(145deg,#fffafd,#f9d6e4)}
.showcase-slide.image-missing img{display:none}
.showcase-slide.image-missing .showcase-fallback{display:grid}
.showcase-dots{position:absolute;z-index:2;bottom:18px;left:0;right:0;display:flex;justify-content:center;gap:9px}
.showcase-dots button{width:10px;height:10px;padding:0;border:1px solid #fff;border-radius:50%;background:#ffffff8c;box-shadow:0 1px 5px #0002;transition:width .25s,background .25s}
.showcase-dots button[aria-current="true"]{width:26px;border-radius:10px;background:#fff}

.fl{position:absolute;background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px;display:flex;gap:12px;align-items:center;box-shadow:0 6px 20px #0000000f}

.ic{width:36px;height:36px;border-radius:50%;background:var(--p);color:#fff;display:grid;place-items:center;flex:none}
.ic.s{background:var(--bg);color:var(--p);border-radius:10px}
.fl b{font-size:18px;display:block}.fl small{font-size:11px;color:var(--mut)}
.ok{color:var(--p)!important}
.pill{background:var(--p);color:#fff;text-align:center;border-radius:10px;padding:15px 10px;font-size:11px;font-weight:600;letter-spacing:1.4px;margin:60px 0 36px}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:24px;box-shadow:0 2px 6px #d4206a14}
.card .ic{width:42px;height:42px;margin-bottom:20px}
.card h3{font-size:16px;margin-bottom:14px}.card p{font-size:12px;line-height:1.7;color:var(--mut);min-height:52px}
.card a{display:block;margin-top:22px;font-size:12px;font-weight:600;color:var(--p)}
.sv{padding-bottom:56px;border-bottom:1px solid var(--line)}
.ab{padding:70px 0 80px}.ab .c{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center}
.ap{position:relative;max-width:330px;margin:0 auto;background:#f9bfd6;border-radius:20px;height:330px;overflow:visible}
.ap img{position:relative;z-index:1;display:block;width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:20px}
.tag{position:absolute;z-index:2;left:50%;bottom:-18px;transform:translateX(-50%);background:var(--p);color:#fff;border-radius:12px;padding:10px 26px;text-align:center;white-space:nowrap}
.tag b{font-size:22px;display:block;font-weight:500}.tag small{font-size:12px}
.ey{font-size:11px;font-weight:700;letter-spacing:1.3px;color:var(--p)}
h2{font-size:30px;margin:8px 0 18px;font-weight:700}
.ab p{font-size:14px;line-height:1.7;color:var(--mut);margin-bottom:14px}
.ck{display:flex;align-items:center;gap:12px;font-size:12px;margin:12px 0}
.ck i{width:24px;height:24px;border-radius:50%;background:var(--line);color:var(--p);display:grid;place-items:center;font-style:normal;font-size:12px}
.cr{display:flex;gap:12px;margin-top:26px;align-items:center}
.crn{background:#fde1ee;color:var(--p);border-radius:8px;padding:8px 14px;font-size:11px}.crn b{display:block}
.me{background:var(--bg);padding:70px 0 60px;text-align:center}
.me .sub{color:var(--mut);font-size:14px;margin-bottom:40px}
.me .card{background:#fff;text-align:left}.me h3{margin:0 0 14px}
.n{color:var(--p);font-size:20px;font-weight:600;margin-bottom:12px}
.s4{max-width:580px;margin:20px auto 0;background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px;text-align:center}
.s4 div{text-align:left;padding-left:84px;margin-top:8px}.s4 b{font-size:14px}.s4 p{font-size:12px;color:var(--mut)}
.dp{padding:60px 0 70px;text-align:center}.dp .g3{margin-top:40px;text-align:left}
.stars{color:var(--p);letter-spacing:2px;margin-bottom:12px}
.dp .card p{font-size:12px;color:var(--ink);line-height:1.7;min-height:0}
.au{display:flex;gap:12px;align-items:center;border-top:1px solid var(--line);margin-top:16px;padding-top:14px}
.au i{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#c9a38f,#7c5a4c)}
.au b{font-size:12px;display:block}.au small{font-size:11px;color:var(--p);font-weight:500}
footer{border-top:1px solid var(--line);padding-top:40px}
.fg{display:grid;grid-template-columns:1.4fr 1fr;gap:30px;font-size:12px;color:var(--mut);line-height:2.1}
.fg b{color:var(--ink);display:block;font-size:12px}.lg{display:flex;align-items:center;gap:14px;font-weight:600;color:var(--ink);font-size:14px}
.cp{display:flex;justify-content:space-between;font-size:11px;color:var(--mut);border-top:1px solid var(--line);margin-top:40px;padding:20px 0}
#lm{position:fixed;inset:0;background:#0006;display:none;place-items:center;z-index:20}
#lm.on{display:grid}
.mb{background:#fff;border-radius:16px;padding:28px;width:min(360px,92%)}
.mb h3{margin-bottom:16px}.mb input{width:100%;padding:11px;border:1px solid var(--line);border-radius:8px;margin-bottom:10px;font:inherit}
@media(max-width:820px){.c{padding:0 20px}nav{display:none}.hero .c,.ab .c,.g3,.fg{grid-template-columns:1fr}.hero{padding:48px 0 58px}.hero .c{gap:30px}.hero h1{font-size:clamp(39px,10vw,52px)}.hero p{font-size:16px}.st{gap:16px}.st div{font-size:15px}.st b{font-size:21px}.ph{height:min(100vw,420px);max-width:500px;margin:4px auto 0}.hr .o{display:none}.cp{flex-direction:column;gap:6px}}

/* ===== Refinamento visual (mesma paleta e estilo) ===== */
body{-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
h1,h2{letter-spacing:-.025em}
h1{font-size:clamp(34px,4.2vw,46px);line-height:1.08}
h2{font-size:clamp(26px,3vw,32px)}
header{background:rgba(255,255,255,.88);backdrop-filter:saturate(1.4) blur(12px);-webkit-backdrop-filter:saturate(1.4) blur(12px);transition:box-shadow .3s}
header.sc{box-shadow:0 6px 24px rgba(212,32,106,.08)}
nav a{position:relative;padding:4px 0;transition:color .2s}
nav a:after{content:"";position:absolute;left:0;bottom:-2px;height:2px;width:0;background:var(--p);border-radius:2px;transition:width .25s}
nav a:hover{color:var(--p)}nav a:hover:after{width:100%}
.btn{border-radius:10px;letter-spacing:.01em;transition:transform .2s,box-shadow .25s,background .2s,color .2s}
.btn:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(212,32,106,.28)}
.btn.o:hover{background:var(--bg);box-shadow:0 8px 18px rgba(212,32,106,.14)}
.btn.w:hover{background:var(--bg);box-shadow:0 8px 18px rgba(212,32,106,.12)}
.btn:active{transform:translateY(0)}
.btn:focus-visible,.chip:focus-visible,input:focus-visible{outline:2px solid var(--p);outline-offset:3px}
.chip{transition:box-shadow .25s,transform .2s}
.chip:hover{box-shadow:0 6px 18px rgba(212,32,106,.14);transform:translateY(-1px)}
.hero{position:relative;overflow:hidden;padding:76px 0 72px;background:radial-gradient(900px 420px at 85% 10%,#ffe3ef 0,transparent 60%),radial-gradient(600px 360px at 0 100%,#ffe8f1 0,transparent 65%),var(--bg)}
.hero .c{position:relative}
.hero p{font-size:15px;line-height:1.75}
.badge{box-shadow:0 2px 8px rgba(212,32,106,.08)}
.st div,.st b{letter-spacing:-.01em}
.pic{box-shadow:0 24px 50px rgba(212,32,106,.18),0 4px 12px rgba(0,0,0,.06);border-radius:26px}
.fl{box-shadow:0 14px 34px rgba(212,32,106,.14);animation:flt 5s ease-in-out infinite}
.f2{animation-delay:-2.5s}
@keyframes flt{50%{transform:translateY(-7px)}}
.ic{box-shadow:0 6px 14px rgba(212,32,106,.28)}
.ic.s{box-shadow:none}
.pill{background:linear-gradient(90deg,#c71c62,#d4206a 50%,#c71c62);box-shadow:0 12px 28px rgba(212,32,106,.22);border-radius:12px;padding:17px 14px}
.card{border-radius:18px;box-shadow:0 4px 14px rgba(212,32,106,.07);transition:transform .3s,box-shadow .3s,border-color .3s}
.card:hover{transform:translateY(-6px);box-shadow:0 18px 38px rgba(212,32,106,.16);border-color:#f6b3cf}
.card a{transition:letter-spacing .2s,gap .2s}
.card a:hover{letter-spacing:.02em}
.sv{padding-bottom:72px}
.ab{padding:90px 0 100px}
.ap{box-shadow:0 24px 50px rgba(212,32,106,.2);border-radius:24px}
.tag{box-shadow:0 12px 26px rgba(212,32,106,.35);border-radius:14px}
.ck i{box-shadow:inset 0 0 0 1px #f6b3cf}
.crn{box-shadow:inset 0 0 0 1px #f6c4d9}
.me{padding:90px 0 80px}
.n{letter-spacing:.02em}
.s4{border-radius:16px;box-shadow:0 4px 14px rgba(212,32,106,.07)}
.dp{padding:80px 0 90px}
.dp .card{position:relative;overflow:hidden}
.dp .card:before{content:"“";position:absolute;right:18px;top:-6px;font-size:90px;font-family:Georgia,serif;color:var(--p);opacity:.09;line-height:1}
.au i{box-shadow:0 0 0 3px #fff,0 0 0 4px #f6c4d9}
footer{padding-top:56px;background:linear-gradient(180deg,#fff,#fff7fb)}
.fg span,.fg div{transition:color .2s}
.fg div:hover{color:var(--p)}
#lm{backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);background:rgba(26,26,26,.35)}
.mb{border-radius:20px;box-shadow:0 30px 60px rgba(212,32,106,.25);animation:pop .3s ease}
@keyframes pop{from{opacity:0;transform:translateY(12px) scale(.97)}}
.mb input{transition:border-color .2s,box-shadow .2s}
.mb input:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(212,32,106,.12);outline:none}
.rv{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
.rv.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}.fl{animation:none}*{scroll-behavior:auto!important}}
`;

const conteudo = `
<header><div class="c">
<button class="chip" id="acc"><span class="av">U</span><span><b>Meu perfil</b><small>Acessar conta →</small></span></button>
<nav><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#dep">Depoimentos</a></nav>
<div class="hr"><a class="instagram-link" href="https://www.instagram.com/nutri.vihcatarina?exln=eWV6bnd6MjBkMXo0" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Vitória Catarina"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><circle cx="17.6" cy="6.5" r="1.1" fill="currentColor"/></svg></a><button class="btn">Agendar consulta</button></div>
</div></header>

<section class="hero"><div class="c">
<div class="hero-copy">
<span class="badge">NUTRIÇÃO COMPORTAMENTAL</span>
<h1>Sentir-se bem começa de dentro <span>para fora.</span></h1>
<p>Emagrecimento consciente sem dietas restritivas. Uma abordagem que respeita seu corpo, sua história e seu ritmo.</p>
<div class="bt"><button class="btn">Quero agendar avaliação</button><button class="btn w">Conhecer método</button></div>
<div class="st"><div><b>8+</b><b style="display:block">anos</b><small>de experiência</small></div><div>Mais de 1200 vidas<small>transformadas</small></div><div>98% recomendam<small>o</small></div></div>
</div>
<div class="ph">
<div class="pic" role="region" aria-label="Vitrine de fotos">
<div class="showcase" id="showcase">
<div class="showcase-slide active"><img src="/vitrine/foto-1.jpg" alt="Vitória em uma corrida de rua ao lado de outro participante" /><div class="showcase-fallback">A vitrine de fotos da Vitória aparecerá aqui</div></div>
<div class="showcase-slide"><img src="/vitrine/foto-2.jpg" alt="Vitória participando de uma corrida de rua" /><div class="showcase-fallback">A vitrine de fotos da Vitória aparecerá aqui</div></div>
<div class="showcase-slide"><img src="/vitrine/foto-3.jpg" alt="Vitória comemorando ao concluir uma prova de corrida" /><div class="showcase-fallback">A vitrine de fotos da Vitória aparecerá aqui</div></div>
<div class="showcase-dots" aria-label="Selecionar foto">
<button type="button" aria-label="Mostrar foto 1" aria-current="true"></button>
<button type="button" aria-label="Mostrar foto 2" aria-current="false"></button>
<button type="button" aria-label="Mostrar foto 3" aria-current="false"></button>
</div>
</div>
</div>


</div>
</div></section>

<section id="servicos" class="sv"><div class="c">
<div class="pill">EMAGRECIMENTO • COMPORTAMENTO ALIMENTAR • SAÚDE DA MULHER • SEM RESTRIÇÃO • ACOLHIMENTO</div>
<div class="g3">
<div class="card"><span class="ic">♡</span><h3>Emagrecimento Consciente</h3><p>Perca peso sem sofrer, reconstruindo sua relação com a comida e com o espelho.</p><a href="#">Saiba mais &nbsp;→</a></div>
<div class="card"><span class="ic">✦</span><h3>Saúde da Mulher</h3><p>Equilíbrio hormonal, SOP, TPM e menopausa com nutrição feita para o corpo feminino.</p><a href="#">Saiba mais &nbsp;→</a></div>
<div class="card"><span class="ic">⚡</span><h3>Desempenho e Energia</h3><p>Mais disposição no dia a dia, intestino regulado e imunidade fortalecida.</p><a href="#">Saiba mais &nbsp;→</a></div>
</div></div></section>

<section id="sobre" class="ab"><div class="c">
<div class="ap"><img src="/sobre-mim.png?v=2" alt="Vitória Catarina segurando uma fita métrica" /><div class="tag"><b>8 anos</b><small>cuidando de mulheres</small></div></div>
<div>
<div class="ey">SOBRE MIM</div><h2>Prazer, sou Vitória Catarina</h2>
<p>Sou nutricionista clínica apaixonada por comportamento alimentar. Acredito que nenhuma mulher precisa de mais uma dieta — precisão de compreensão, estratégia e constância com leveza.</p>
<p>Meu método é uma ciência da nutrição, escuta ativa e pequenas mudanças sustentáveis que cabem na vida real.</p>
<div class="ck"><i>✓</i>Atendimento humanizado, sem julgamentos</div><div class="ck"><i>✓</i>Plano alimentar personalizado e flexível</div><div class="ck"><i>✓</i>Acompanhamento contínuo pelo WhatsApp</div>
<div class="cr"><button class="btn">Agendar comigo</button><div class="crn"><b>CRN 12345</b>Atendimento online · Todo Brasil</div></div>
</div></div></section>

<section class="me"><div class="c">
<div class="ey">COMO FUNCIONA</div><h2>Um método feito para a vida real</h2><div class="sub">Nada de dieta da moda. Um passo a passo simples, humano e eficaz.</div>
<div class="g3">
<div class="card"><div class="n">01</div><h3>Escuta e Acolhimento</h3><p>Primeira consulta profunda para entender sua história, rotina e relação com a comida.</p></div>
<div class="card"><div class="n">02</div><h3>Plano Personalizado</h3><p>Estratégia feita para sua realidade, sem cortes radicais e com comidas que você ama.</p></div>
<div class="card"><div class="n">03</div><h3>Acompanhamento Próximo</h3><p>Retornos regulares + suporte no WhatsApp para ajustar e manter a motivação.</p></div>
</div>
<div class="s4"><div class="n" style="text-align:center;padding:0">04</div><div><b>Autonomia e Leveza</b><p>Você aprende a se alimentar com liberdade e mantém os resultados para sempre.</p></div></div>
</div></section>

<section id="dep" class="dp"><div class="c">
<div class="ey">DEPÓSITOS</div><h2>Histórias que me enchem de orgulho</h2>
<div class="g3">
<div class="card"><div class="stars">★★★★★</div><p>"A Vivi mudou minha relação com a comida. Pela primeira vez em anos, emagreço sem sofrer e sem culpa."</p><div class="au"><i></i><div><b>Mariana S.</b><small>-14 kg em 6 meses</small></div></div></div>
<div class="card"><div class="stars">★★★★★</div><p>"Acolhimento que eu nunca tive. Ela entendeu meu SOP, minha rotina corrida e fez tudo caber."</p><div class="au"><i></i><div><b>Camila R.</b><small>-8kg + SOP</small></div></div></div>
<div class="card"><div class="stars">★★★★★</div><p>"Saí do efeito sanfona. Hoje como de tudo com equilíbrio e mantenho meu peso há 1 ano."</p><div class="au"><i></i><div><b>Juliana T.</b><small>+ energia e leveza</small></div></div></div>
</div></div></section>

<footer id="contato"><div class="c">
<div class="fg">
<div><div class="lg"><span class="av" style="width:36px;height:36px">V</span>Vitória Catarina</div>Nutrição comportamental para mulheres que desejam emagrecer com leveza e sem restrição.</div>
<div><b>Links rápidos</b><a href="#sobre">Sobre mim</a><br><a href="#servicos">Serviços</a><br><a href="#dep">Depoimentos</a><br><a href="https://www.instagram.com/nutri.vihcatarina?exln=eWV6bnd6MjBkMXo0" target="_blank" rel="noopener noreferrer">Instagram</a></div>
</div>
<div class="cp"><span>© 2025 Vitória Catarina Nutrição. Todos os direitos reservados.</span><span>CRN 12345 · Nutricionista Clínica</span></div>
</div></footer>

<div id="lm"><div class="mb"><h3>Acessar minha conta</h3><input placeholder="E-mail" type="email"><input placeholder="Senha" type="password"><button class="btn" style="width:100%" id="go">Entrar</button><button class="btn w" style="width:100%;margin-top:8px" id="cl">Fechar</button></div></div>
`;

function montarPagina() {
  const style = document.createElement('style');
  style.textContent = estilos;
  document.head.appendChild(style);
  document.body.innerHTML = conteudo;
  iniciarVitrine();
  iniciarEventos();
}

function iniciarVitrine() {
  const slides = [...document.querySelectorAll('.showcase-slide')];
  const dots = [...document.querySelectorAll('.showcase-dots button')];
  if (!slides.length) return;

  slides.forEach((slide) => {
    const img = slide.querySelector('img');
    const marcarAusente = () => slide.classList.add('image-missing');
    img.addEventListener('error', marcarAusente, { once: true });
    if (img.complete && !img.naturalWidth) marcarAusente();
  });

  let atual = 0;
  const mostrar = (indice) => {
    atual = indice;
    slides.forEach((slide, i) => {
      const posicao = (i - atual + slides.length) % slides.length;
      slide.dataset.position = String(posicao);
      slide.classList.toggle('active', posicao === 0);
    });
    dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === atual)));
  };

  mostrar(atual);
  dots.forEach((dot, i) => dot.addEventListener('click', () => mostrar(i)));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => mostrar((atual + 1) % slides.length), 4500);
  }
}

function iniciarEventos() {
  // Sombra no cabeçalho ao rolar
  const hd = document.querySelector('header');
  const onScroll = () => hd.classList.toggle('sc', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Animação suave de entrada ao rolar
  const alvos = document.querySelectorAll('.pill, .card, .s4, .ab .c > div, .me .sub, .dp h2, .me h2');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    alvos.forEach((el, i) => {
      el.classList.add('rv');
      el.style.transitionDelay = (i % 3) * 90 + 'ms';
      io.observe(el);
    });
  }
  // Estado inicial: visitante ainda não logado
  const state={logged:false};
  const lm=document.getElementById('lm');
  document.getElementById('acc').onclick=()=>{if(!state.logged)lm.classList.add('on')};
  document.getElementById('cl').onclick=()=>lm.classList.remove('on');
  lm.onclick=e=>{if(e.target===lm)lm.classList.remove('on')};
  document.getElementById('go').onclick=()=>lm.classList.remove('on');
  document.querySelectorAll('.btn').forEach(b=>{if(/agendar/i.test(b.textContent))b.onclick=()=>{if(!state.logged)lm.classList.add('on')}});
}

document.addEventListener('DOMContentLoaded', montarPagina);












