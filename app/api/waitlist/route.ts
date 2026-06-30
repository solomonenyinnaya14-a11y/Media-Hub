<form id="waitlist" style="display:flex; gap:8px; margin-top:16px;">
  <input 
    type="email" 
    name="email" 
    placeholder="your@email.com" 
    required
    style="flex:1; padding:12px; border-radius:8px; border:1px solid #ccc;"
  >
  <button 
    type="submit" 
    style="padding:12px 20px; border-radius:8px; border:0; background:#000; color:#fff; font-weight:600;"
  >
    Lock In Now
  </button>
</form>
<p id="msg" style="margin-top:8px; font-size:14px;"></p>

<script>
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwjD5qIBsFVCSUDEnHrB-MKS0UAbC8WKCMGK-Rt9mMPzVk2-xt39Xd17veacb-sSHbgdg/exec";

document.getElementById('waitlist').addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = document.getElementById('msg');
  const email = e.target.email.value;
  
  msg.textContent = "Locking you in...";
  
  await fetch(WEB_APP_URL, {
    method: "POST",
    mode: "no-cors", 
    body: new URLSearchParams({email})
  });
  
  msg.textContent = "✅ You're in. Check your email.";
  e.target.reset();
});
</script>
