function createLink(text, href) {
  const a = document.createElement('a')
  a.innerText = text
  a.href = href
  return a
}

const episode = document.getElementsByClassName("entry-title")[0].innerText

const root = document.getElementById("main")
  .getElementsByClassName("entry-content")[0]

const list = root.getElementsByTagName("select")[0]
const video = root.getElementsByTagName("p")[0]

const wrapper = document.createElement("div")
wrapper.className = 'container'

video.parentNode.insertBefore(wrapper, video)

const episodes = Array.from(list)
  .filter(opt => opt.value)
  .map(opt => ({ label: opt.label, url: opt.value }))
  .sort((a,b)=> (a.label > b.label ? 1 : -1))

const index = episodes.findIndex(it => it.label === episode)
const prev = createLink("<<<", episodes[index - 1].url)
const next = createLink(">>>", episodes[index + 1].url)
wrapper.appendChild(prev)
wrapper.appendChild(video)
wrapper.appendChild(next)
