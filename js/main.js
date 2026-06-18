const form = document.getElementById('contactForm')
const status = document.getElementById('formStatus')

emailjs.init('FoeSaz4hNrLX-LcPj')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  }

  if (!data.name || !data.email || !data.message) return

  status.style.display = 'block'
  status.textContent = 'Enviando...'
  status.style.color = 'var(--on-surface-variant)'
  form.querySelector('button[type="submit"]').disabled = true

  try {
    const response = await emailjs.send('service_v25195l', 'template_n8g0x6s', data)
    if (response.status === 200) {
      status.textContent = 'Mensagem enviada com sucesso!'
      status.style.color = '#4ade80'
      form.reset()
    } else {
      throw new Error()
    }
  } catch {
    status.textContent = 'Erro ao enviar. Tente novamente.'
    status.style.color = '#f87171'
    form.querySelector('button[type="submit"]').disabled = false
  }
})
