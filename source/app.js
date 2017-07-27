(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS
  var element

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.
  function updateElement () {
    if (options.seal_badge === 'None' || !options.domain_id) return
    if (document.getElementById('gamasec_badge')) return

    var badge = document.createElement('div')
    badge.id = 'gamasec_badge'
    badge.setAttribute('style', 'bottom:0;position:fixed;' + options.seal_badge + ': 0;')

    var link = document.createElement('a')

    link.innerHTML = '<img border="0" src="https://www.gamasec.com/images/seals/wseal.png" alt="GamaScan" />'

    link.querySelector('img').addEventListener('contextmenu', function (event) {
      event.preventDefault()

      alert('Copyright 2013 Gamasec Ltd | All rights reserved.');
      return false
    })

    link.addEventListener('click', function openGamaScan(event) {
      event.preventDefault()

      window.open(
        'https://www.gamasec.com/Seal.aspx?domain=' + options.domain_id,
        'GamaScan',
        'toolbar=0,resizable=0,width=532px,height=700px,location=0,menubar=0,scrollbars=0,status=0',
        '')
    })


    badge.appendChild(link)

    document.body.appendChild(badge)
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }
}())
