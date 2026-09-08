const CATS = [
  { id:'paes',        label:'Pães',        ico:'<path d="M12 3v18"/><path d="M8 6c-2-1-4 0-4 2.5S6 12 8 11"/><path d="M16 6c2-1 4 0 4 2.5S18 12 16 11"/><path d="M8 12c-2-1-4 0-4 2.5S6 18 8 17"/><path d="M16 12c2-1 4 0 4 2.5S18 18 16 17"/>' },
  { id:'lanches',     label:'Lanches',     ico:'<path d="M4 11h16"/><path d="M4 11a8 8 0 0 1 16 0"/><path d="M4 15h16"/><path d="M6 19h12a2 2 0 0 0 2-2H4a2 2 0 0 0 2 2Z"/>' },
  { id:'bebidas',     label:'Bebidas',     ico:'<path d="M8 3h8l-1 6H9L8 3Z"/><path d="M9 9l-1 11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1L15 9"/>' },
  { id:'confeitaria', label:'Doces',       ico:'<path d="M6 11h12l-1 8a2 2 0 0 1-2 1.5H9A2 2 0 0 1 7 19Z"/><path d="M6 11a3 3 0 0 1 6 0 3 3 0 0 1 6 0"/><path d="M12 5v3"/>' },
];

const PRODUCTS = [
  { id:'pao-chapa', cat:'paes', name:'Pão na Chapa', price:8.50, desc:'Pão francês aberto na chapa com requeijão cremoso.', img:'pao-na-chapa.png',
    options:[ {title:'Ponto do pão', type:'radio', req:true, items:[{l:'Bem tostado'},{l:'Levemente tostado'}]}, {title:'Turbine seu pão', type:'checkbox', items:[{l:'Requeijão extra',p:2.00},{l:'Fatia de queijo',p:3.00},{l:'Ovo mexido',p:2.50}]} ] },
  { id:'baguete', cat:'paes', name:'Baguete Artesanal', price:12.00, desc:'Casca crocante, assada em forno de pedra.', img:'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=500&q=70',
    options:[ {title:'Como prefere?', type:'radio', req:true, items:[{l:'Inteira'},{l:'Fatiada'}]}, {title:'Acompanhamentos', type:'checkbox', items:[{l:'Manteiga da casa',p:1.50},{l:'Geleia artesanal',p:3.00}]} ] },

  { id:'misto', cat:'lanches', name:'Misto na Baguete', price:16.90, desc:'Presunto e queijo derretidos na baguete prensada.', img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=70',
    options:[ {title:'Ponto do queijo', type:'radio', req:true, items:[{l:'Bem derretido'},{l:'No ponto'}]}, {title:'Adicionais', type:'checkbox', items:[{l:'Bacon crocante',p:4.00},{l:'Ovo',p:2.50},{l:'Tomate e orégano',p:1.50}]} ] },
  { id:'xburguer', cat:'lanches', name:'X-Burguer Artesanal', price:22.00, desc:'Blend 160g, queijo prato e pão brioche na chapa.', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=70',
    options:[ {title:'Ponto da carne', type:'radio', req:true, items:[{l:'Ao ponto'},{l:'Bem passada'}]}, {title:'Monte do seu jeito', type:'checkbox', items:[{l:'Carne extra 160g',p:9.00},{l:'Cheddar',p:3.00},{l:'Cebola',p:2.50}]} ] },

  { id:'suco', cat:'bebidas', name:'Suco de Laranja', price:11.00, desc:'Laranjas espremidas na hora, 400ml natural.', img:'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=70',
    options:[ {title:'Gelo', type:'radio', req:true, items:[{l:'Com Gelo'},{l:'Sem Gelo'}]}, {title:'Finalização', type:'checkbox', items:[{l:'Rodela de Limão'},{l:'Rodela de Laranja'},{l:'Adoçante'},{l:'Açúcar'}]} ] },
  { id:'expresso', cat:'bebidas', name:'Café Expresso', price:6.50, desc:'Grãos torrados na casa, extração curta.', img:'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=70',
    options:[ {title:'Intensidade', type:'radio', req:true, items:[{l:'Curto (forte)'},{l:'Longo'}]}, {title:'Adoçar', type:'checkbox', items:[{l:'Açúcar'},{l:'Adoçante'},{l:'Dose extra',p:3.00}]} ] },
  { id:'refri', cat:'bebidas', name:'Refrigerante Lata', price:7.00, desc:'Lata 350ml bem gelada.', img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=70',
    options:[ {title:'Gelo', type:'radio', req:true, items:[{l:'Com Gelo'},{l:'Sem Gelo'}]}, {title:'Acompanhamentos', type:'checkbox', items:[{l:'Rodela de Limão'},{l:'Rodela de Laranja'},{l:'Copo com gelo'}]} ] },

  { id:'sonho', cat:'confeitaria', name:'Sonho de Creme', price:9.50, desc:'Massa fofinha com recheio generoso de creme.', img:'https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&w=500&q=70',
    options:[ {title:'Recheio', type:'radio', req:true, items:[{l:'Creme baunilha'},{l:'Doce de leite',p:1.00}]}, {title:'Finalização', type:'checkbox', items:[{l:'Cobertura chocolate',p:2.50}]} ] },
  { id:'bolo-cenoura', cat:'confeitaria', name:'Bolo de Cenoura', price:10.90, desc:'Fatia caseira com cobertura cremosa de chocolate.', img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=70',
    options:[ {title:'Temperatura', type:'radio', req:true, items:[{l:'Aquecido'},{l:'Natural'}]}, {title:'Acompanha', type:'checkbox', items:[{l:'Calda extra',p:2.00},{l:'Sorvete',p:5.00}]} ] },
];

let customer = { name:'Mateus', whatsapp:'(11) 98765-4321', cpf:'123.456.789-00', email:'mateus@email.com', points:120 };
let comanda = null;
let modal = null;
let pendingItem = null;
let activeCat = 'paes';

const brl = v => 'R$ ' + v.toFixed(2).replace('.', ',');
const catLabel = id => (CATS.find(c=>c.id===id)||{}).label || '';
const firstName = () => (customer.name||'').trim().split(' ')[0] || 'Cliente';

function imgFallback(el){
  el.onerror = null;
  el.style.display = 'none';
}

function toast(msg){
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t); t._t = setTimeout(()=>t.classList.remove('show'), 2000);
}

function renderCats(){
  document.getElementById('cats').innerHTML = CATS.map(c => `
    <button onclick="setCat('${c.id}')" class="cat-pill ${c.id===activeCat?'on':''}"
      style="display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #f0e6dd; color:#7C2D12; font-weight:700; font-size:13px; padding:10px 18px; border-radius:16px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color:${c.id===activeCat?'#fff':'#EA580C'}">${c.ico}</svg>
      ${c.label}
    </button>`).join('');
}
function setCat(id){ activeCat=id; renderCats(); renderMenu(); }

function renderMenu(){
  const q = (document.getElementById('search').value||'').toLowerCase().trim();
  let list = PRODUCTS.filter(p => p.cat===activeCat);
  if(q) list = PRODUCTS.filter(p => (p.name+p.desc).toLowerCase().includes(q));
  const feed = document.getElementById('feed');

  if(!list.length){
    feed.innerHTML = `<div style="grid-column: span 2; text-align:center; padding:40px 10px; color:#a8a29e;"><p style="font-family:'Fraunces',serif; font-size:18px; font-weight:700; color:#431407;">Nada encontrado</p><p style="font-size:13px; margin-top:4px;">Tente outra busca ou categoria.</p></div>`;
    return;
  }

  feed.innerHTML = list.map(p => `
    <div class="prod" onclick="openProd('${p.id}')" style="background:#fff; border:1px solid #f4ece4; border-radius:18px; padding:10px; display:flex; flex-direction:column; box-shadow:0 6px 12px -6px rgba(67,20,7,.1); position:relative;">
        <div style="width:100%; aspect-ratio:1; border-radius:12px; overflow:hidden; background:#f5e6d3; position:relative; margin-bottom:12px;">
            <img src="${p.img}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover;" onerror="imgFallback(this)">
            <div style="position:absolute; top:8px; left:8px; width:28px; height:28px; background:rgba(255,255,255,0.9); border-radius:50%; display:flex; align-items:center; justify-content:center; backdrop-filter: blur(2px);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <button onclick="event.stopPropagation(); openProd('${p.id}')" style="position:absolute; bottom:8px; right:8px; width:30px; height:30px; background:#fff; border-radius:50%; border:none; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EA580C" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            </button>
        </div>
        <p style="font-family:'Fraunces',serif; font-weight:700; font-size:13.5px; color:#431407; line-height:1.2; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${p.name}</p>
        <p style="font-size:11px; color:#a8a29e; margin-top:4px;">${catLabel(p.cat)}</p>
        <div style="margin-top:auto; padding-top:8px;">
            <span style="font-family:'Fraunces',serif; font-weight:800; font-size:16px; color:#EA580C;">${brl(p.price)}</span>
        </div>
    </div>`).join('');
}

function openProd(id){
  const p = PRODUCTS.find(x=>x.id===id);
  modal = { product:p, qty:1, radios:{}, checks:new Set() };
  p.options.forEach((g,gi)=>{ if(g.type==='radio' && g.req) modal.radios[gi]=0; });

  const mImg = document.getElementById('m-img');
  mImg.style.display = 'block';
  mImg.src = p.img;
  mImg.onerror = () => imgFallback(mImg);

  document.getElementById('m-cat').textContent = catLabel(p.cat);
  document.getElementById('m-name').textContent = p.name;
  document.getElementById('m-desc').textContent = p.desc;
  document.getElementById('m-qty').textContent = '1';

  renderOptions(); computeModal();
  document.getElementById('overlay-prod').classList.add('show');
}
function closeProd(){ document.getElementById('overlay-prod').classList.remove('show'); }

function renderOptions(){
  const p = modal.product;
  document.getElementById('m-options').innerHTML = p.options.map((g,gi)=>{
    const rows = g.items.map((it,ii)=>{
      const sel = g.type==='radio' ? modal.radios[gi]===ii : modal.checks.has(gi+'-'+ii);
      const ctrl = g.type==='radio'
        ? `<span style="width:24px; height:24px; border-radius:50%; border:2px solid ${sel?'#EA580C':'#d6ccc2'}; display:flex; align-items:center; justify-content:center; transition: all .2s;">${sel?'<span style="width:12px;height:12px;border-radius:50%;background:#EA580C;"></span>':''}</span>`
        : `<span style="width:24px; height:24px; border-radius:8px; border:2px solid ${sel?'#EA580C':'#d6ccc2'}; background:${sel?'#EA580C':'transparent'}; display:flex; align-items:center; justify-content:center; transition: all .2s;">${sel?'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>':''}</span>`;
      const price = it.p ? `<span style="font-size:13.5px; font-weight:800; color:#EA580C;">+ ${brl(it.p)}</span>` : `<span style="font-size:12px; color:#c4bcb2; font-weight:700;">grátis</span>`;
      return `<div class="opt-row" onclick="toggleOpt(${gi},${ii})" style="display:flex; align-items:center; gap:14px; padding:14px 16px; border:2px solid ${sel?'#EA580C':'#f0e6dd'}; border-radius:16px; background:${sel?'#FFF7ED':'#fff'}; cursor:pointer;">${ctrl}<span style="flex:1; font-size:15px; font-weight:700; color:#431407;">${it.l}</span>${price}</div>`;
    }).join('');
    return `<div><div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;"><p style="font-weight:800; font-size:15px; color:#431407;">${g.title}</p>${g.req?'<span style="font-size:10px;font-weight:800;color:#EA580C;background:#FFF7ED;padding:4px 10px;border-radius:999px;">OBRIGATÓRIO</span>':'<span style="font-size:11px;font-weight:700;color:#a8a29e;">Opcional</span>'}</div><div style="display:flex; flex-direction:column; gap:10px;">${rows}</div></div>`;
  }).join('');
}
function toggleOpt(gi,ii){
  const g = modal.product.options[gi];
  if(g.type==='radio') modal.radios[gi]=ii;
  else { const k=gi+'-'+ii; modal.checks.has(k)?modal.checks.delete(k):modal.checks.add(k); }
  renderOptions(); computeModal();
}
function modalQty(d){ modal.qty=Math.max(1,modal.qty+d); document.getElementById('m-qty').textContent=modal.qty; computeModal(); }
function modalUnitPrice(){
  const p=modal.product; let u=p.price;
  Object.entries(modal.radios).forEach(([gi,ii])=>u+=(p.options[gi].items[ii].p||0));
  modal.checks.forEach(k=>{ const [gi,ii]=k.split('-').map(Number); u+=(p.options[gi].items[ii].p||0); });
  return u;
}
function computeModal(){ document.getElementById('m-total').textContent = brl(modalUnitPrice()*modal.qty); }
function selectedLabels(){
  const p=modal.product; const labs=[];
  p.options.forEach((g,gi)=>{ if(g.type==='radio'){ const ii=modal.radios[gi]; if(ii!=null) labs.push(g.items[ii].l); } });
  modal.checks.forEach(k=>{ const [gi,ii]=k.split('-').map(Number); labs.push(p.options[gi].items[ii].l); });
  return labs;
}

function requestAdd(){
  pendingItem = {
    uid: Date.now()+'-'+Math.random().toString(36).slice(2,6),
    id: modal.product.id, name: modal.product.name,
    unit: modalUnitPrice(), qty: modal.qty, opts: selectedLabels(), img: modal.product.img
  };
  closeProd();
  if(comanda){ commitPending(); }
  else { openLink(); }
}
function commitPending(){
  if(!pendingItem) return;
  comanda.items.push(pendingItem);
  const q = pendingItem.qty; const nm = pendingItem.name;
  pendingItem = null;
  updateBadge(); renderComanda();
  toast(q + '× ' + nm.split(' ').slice(0,2).join(' ') + ' na comanda');
}

function openLink(){ document.getElementById('link-input').value=''; valLink(); document.getElementById('overlay-link').classList.add('show'); }
function closeLink(){ document.getElementById('overlay-link').classList.remove('show'); }
function valLink(){ const v=parseInt(document.getElementById('link-input').value,10); const b=document.getElementById('btn-link2'); const ok=v>0; b.disabled=!ok; b.style.background=ok?'#EA580C':'#e7ceb8'; }
function linkFromOverlay(){ const v=parseInt(document.getElementById('link-input').value,10); if(v>0) linkComanda(String(v)); }

function valComanda(){ const v=parseInt(document.getElementById('comanda-input').value,10); const b=document.getElementById('btn-link'); const ok=v>0; b.disabled=!ok; b.style.background=ok?'#EA580C':'#e7ceb8'; }
function linkFromTab(){ const v=parseInt(document.getElementById('comanda-input').value,10); if(v>0) linkComanda(String(v)); }

function startScan(){
  document.getElementById('overlay-scan').classList.add('show');
  setTimeout(()=>{
    document.getElementById('overlay-scan').classList.remove('show');
    linkComanda(String(Math.floor(Math.random()*9000)+1000));
  }, 1500);
}

function linkComanda(number){
  comanda = { number, items: comanda ? comanda.items : [] };
  closeLink();
  buildBarcode(number);
  if(pendingItem){ commitPending(); }
  updateBadge(); renderComanda();
  toast('Comanda #' + number + ' vinculada');
}

function comandaSubtotal(){ return comanda ? comanda.items.reduce((s,i)=>s+i.unit*i.qty,0) : 0; }

function renderComanda(){
  const s1=document.getElementById('comanda-state1'), s2=document.getElementById('comanda-state2');
  if(!comanda){ s1.style.display='block'; s2.style.display='none'; return; }
  s1.style.display='none'; s2.style.display='block';
  document.getElementById('comanda-num').textContent = '#'+comanda.number;

  const wrap=document.getElementById('comanda-list'), empty=document.getElementById('comanda-empty');
  if(!comanda.items.length){ wrap.innerHTML=''; empty.style.display='block'; }
  else {
    empty.style.display='none';
    wrap.innerHTML = comanda.items.map((it,idx)=>{
      const optTxt = it.opts.length ? it.opts.join(' · ') : 'Sem adicionais';
      return `<div style="background:#fff; border:1px solid #f4ece4; border-radius:20px; padding:14px; display:flex; gap:14px; box-shadow: 0 4px 12px -8px rgba(67,20,7,.2);">
        <div style="width:72px; height:72px; border-radius:14px; overflow:hidden; flex:0 0 auto; background:#f5e6d3; border: 1px solid #f0e6dd;"><img src="${it.img}" style="width:100%; height:100%; object-fit:cover;" onerror="imgFallback(this)"></div>
        <div style="flex:1; min-width:0;">
          <div style="display:flex; justify-content:space-between; gap:8px;">
            <p style="font-weight:700; font-size:14.5px; color:#431407; line-height:1.2;">${it.name}</p>
            <button onclick="removeItem(${idx})" style="border:none; background:none; padding:2px; flex:0 0 auto; transition: transform .15s ease;" onmousedown="this.style.transform='scale(0.9)'" onmouseup="this.style.transform='scale(1)'"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cbb9a8" stroke-width="2.2" stroke-linecap="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg></button>
          </div>
          <p style="font-size:12px; font-weight:500; color:#a8a29e; margin-top:4px; line-height:1.35; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${optTxt}</p>
          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:10px;">
            <div style="display:flex; align-items:center; gap:2px; background:#FAFAF9; border:2px solid #f0e6dd; border-radius:12px; padding:3px;">
              <button onclick="changeQty(${idx},-1)" style="width:28px; height:28px; border:none; background:#fff; border-radius:8px; display:flex; align-items:center; justify-content:center; box-shadow: 0 1px 3px rgba(0,0,0,.05);"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C2D12" stroke-width="2.8" stroke-linecap="round"><path d="M5 12h14"/></svg></button>
              <span style="width:24px; text-align:center; font-weight:800; font-size:14px; color:#431407;">${it.qty}</span>
              <button onclick="changeQty(${idx},1)" style="width:28px; height:28px; border:none; background:#fff; border-radius:8px; display:flex; align-items:center; justify-content:center; box-shadow: 0 1px 3px rgba(0,0,0,.05);"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EA580C" stroke-width="2.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button>
            </div>
            <span style="font-family:'Fraunces',serif; font-weight:700; font-size:16px; color:#431407;">${brl(it.unit*it.qty)}</span>
          </div>
        </div>
      </div>`;
    }).join('');
  }
  document.getElementById('comanda-subtotal').textContent = brl(comandaSubtotal());
}
function changeQty(idx,d){ comanda.items[idx].qty+=d; if(comanda.items[idx].qty<=0) comanda.items.splice(idx,1); updateBadge(); renderComanda(); }
function removeItem(idx){ comanda.items.splice(idx,1); updateBadge(); renderComanda(); }

function buildBarcode(number){
  const bc=document.getElementById('barcode'); let seed=0; for(const ch of number) seed+=ch.charCodeAt(0);
  let html='';
  for(let i=0;i<48;i++){ seed=(seed*9301+49297)%233280; const w=1+(seed% 4); const dark=(seed%3!==0); html+=`<i style="width:${w}px; background:${dark?'#1c1917':'transparent'};"></i>`; }
  bc.innerHTML=html;
  document.getElementById('barcode-num').textContent = '7890 '+number.padStart(4,'0')+' 0012';
}

function switchTab(tab){
  ['cardapio','comanda','perfil'].forEach(t=>{
    document.getElementById('screen-'+t).classList.toggle('active', t===tab);
    document.getElementById('tab-'+t).classList.toggle('on', t===tab);
  });
  if(tab==='cardapio'){ document.getElementById('status-bar').style.color = '#fff'; } else { document.getElementById('status-bar').style.color = '#431407'; }
  if(tab==='comanda') renderComanda();
  if(tab==='perfil') renderPerfil();
}
function updateBadge(){
  const n = comanda ? comanda.items.reduce((s,i)=>s+i.qty,0) : 0;
  const b=document.getElementById('nav-badge');
  if(n>0){ b.style.display='flex'; b.textContent=n; } else b.style.display='none';
}

function renderPerfil(){
  document.getElementById('pts-big').textContent = customer.points;
  document.getElementById('greet-name').textContent = firstName();

  const target=200;
  const pct=Math.min(100, Math.round(customer.points/target*100));
  document.getElementById('pts-bar').style.width = pct+'%';
  const falta=Math.max(0, target-customer.points);
  document.getElementById('pts-next').textContent = falta>0 ? `Faltam ${falta} pts para o próximo prêmio` : 'Você já pode resgatar o prêmio máximo!';
  const btn=document.getElementById('btn-redeem');
  if(customer.points>=100){ btn.disabled=false; btn.style.opacity='1'; btn.textContent='Resgatar Café Expresso (100 pts)'; }
  else { btn.disabled=true; btn.style.opacity='.55'; btn.textContent='Pontos insuficientes para resgate'; }

  document.getElementById('history').innerHTML = HISTORY.map(h=>`
    <div style="background:#fff; border:1px solid #f4ece4; border-radius:20px; padding:16px; display:flex; align-items:center; justify-content:space-between; box-shadow: 0 4px 10px -8px rgba(0,0,0,.1);">
      <div style="display:flex; align-items:center; gap:14px;">
        <div style="width:44px; height:44px; border-radius:14px; background:#FFF7ED; display:flex; align-items:center; justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA580C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h14v18l-2.5-1.6L14 21l-2-1.6L10 21l-2.5-1.6L5 21z"/><path d="M9 8h6M9 12h6"/></svg></div>
        <div><p style="font-weight:800; font-size:15px; color:#431407;">Comanda ${h.n}</p><p style="font-size:12px; font-weight:600; color:#a8a29e; margin-top:3px;">${h.date} · ${h.items} itens</p></div>
      </div>
      <span style="font-family:'Fraunces',serif; font-weight:700; font-size:16px; color:#431407;">${brl(h.val)}</span>
    </div>`).join('');
}

function redeem(){
  if(customer.points<100) return;
  customer.points-=100;
  renderPerfil();
  toast('Café expresso liberado! Retire no balcão.');
}
function syncName(){
  customer.name = document.getElementById('f-name').value || 'Cliente';
  document.getElementById('greet-name').textContent = firstName();
}
function saveProfile(){
  customer.whatsapp = document.getElementById('f-whats').value;
  customer.cpf = document.getElementById('f-cpf').value;
  customer.email = document.getElementById('f-email').value;
  syncName();
  toast('Cadastro atualizado com sucesso');
}

function tick(){ const d=new Date(); document.getElementById('clock').textContent = d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0'); }

renderCats(); renderMenu(); updateBadge();
document.getElementById('greet-name').textContent = firstName();
tick(); setInterval(tick,15000);
