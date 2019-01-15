var a= [] 
$0.querySelectorAll('tr').forEach(item => {
  const td = item.querySelector('td')
  const text = td.innerText
  if (text.indexOf('slot') == -1 && text.indexOf('v-model') > -1) {
    a.push('"' + td.innerText.split('(v-model)')[0] + '"')
  } else if(text.indexOf('slot') == -1) {
    a.push('"' + td.innerText + '"')
  }
})
console.dir(a.toString())

function getAttrs(tag) {
  var a= {}
  $0.querySelectorAll('tr').forEach(item => {
    const tdobj = {}
    const td = item.querySelector('td:nth-child(1)')
    const tdDes = item.querySelector('td:nth-child(2)')
    const tdType = item.querySelector('td:nth-child(3)')
    const tdDefault = item.querySelector('td:nth-child(4)')
    let text = td.innerText
    if (text.indexOf('slot') == -1 && text.indexOf('v-model') > -1) {
      text = td.innerText.split('(v-model)')[0]
    } else if(text.indexOf('slot') == -1) {
      text = td.innerText
    }
    a[`${tag}/${text}`] = {
      description: tdDes.innerText,
      optionType: tdType.innerText,
      defaultValue: tdDefault.innerText,
    }
  })
  console.dir(JSON.stringify(a))
}
getAttrs('a-input-number')
