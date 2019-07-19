$(document).ready(function() {
  var keys = [
    [{
        orth: 'ଅ',
        phon: 'ɔ'
      },
      {
        orth: 'ଆ',
        phon: 'a'
      },
      {
        orth: 'ଇ',
        phon: 'i'
      },
      {
        orth: 'ଈ',
        phon: 'i'
      },
      {
        orth: 'ଉ',
        phon: 'u'
      },
      {
        orth: 'ଊ',
        phon: 'u'
      },
      {
        orth: 'ଋ',
        phon: 'r̩'
      },
      {
        orth: 'ୠ',
        phon: 'r̩'
      },
      {
        orth: 'ଌ',
        phon: 'l̩'
      },
      {
        orth: 'ୡ',
        phon: 'l̩'
      },
      {
        orth: 'ଏ',
        phon: 'e'
      },
      {
        orth: 'ଐ',
        phon: 'ai'
      },
      {
        orth: 'ଓ',
        phon: 'o'
      },
      {
        orth: 'ଔ',
        phon: 'au'
      }
    ],
    [{
        orth: 'ା',
        phon: 'a'
      },
      {
        orth: 'ି',
        phon: 'i'
      },
      {
        orth: 'ୀ',
        phon: 'i'
      },
      {
        orth: 'ୁ',
        phon: 'u'
      },
      {
        orth: 'ୂ',
        phon: 'u'
      },
      {
        orth: 'ୃ',
        phon: 'r̩'
      },
      {
        orth: 'େ',
        phon: 'e'
      },
      {
        orth: 'ୈ',
        phon: 'ai'
      },
      {
        orth: 'ୋ',
        phon: 'o'
      },
      {
        orth: 'ୌ',
        phon: 'au'
      }
    ],
    [{
        orth: 'କ',
        phon: 'kɔ'
      },
      {
        orth: 'ଖ',
        phon: 'kʰɔ'
      },
      {
        orth: 'ଗ',
        phon: 'gɔ'
      },
      {
        orth: 'ଘ',
        phon: 'g̤ɔ'
      },
      {
        orth: 'ଙ',
        phon: 'ŋɔ'
      }
    ],
    [{
        orth: 'ଚ',
        phon: 't͡ʃɔ'
      },
      {
        orth: 'ଛ',
        phon: 't͡ʃʰɔ'
      },
      {
        orth: 'ଜ',
        phon: 'd͡ʒɔ'
      },
      {
        orth: 'ଝ',
        phon: 'd͡ʒ̤ɔ'
      },
      {
        orth: 'ଞ',
        phon: 'ɲɔ'
      }
    ],
    [{
        orth: 'ଟ',
        phon: 'ʈɔ'
      },
      {
        orth: 'ଠ',
        phon: 'ʈʰɔ'
      },
      {
        orth: 'ଡ',
        phon: 'ɖɔ'
      },
      {
        orth: 'ଢ',
        phon: 'ɖ̤ɔ'
      },
      {
        orth: 'ଣ',
        phon: 'ɳɔ'
      },
    ],
    [{
        orth: 'ତ',
        phon: 'tɔ'
      },
      {
        orth: 'ଥ',
        phon: 'tʰɔ'
      },
      {
        orth: 'ଦ',
        phon: 'dɔ'
      },
      {
        orth: 'ଧ',
        phon: 'd̤ɔ'
      },
      {
        orth: 'ନ',
        phon: 'nɔ'
      },
    ],
    [{
        orth: 'ପ',
        phon: 'pɔ'
      },
      {
        orth: 'ଫ',
        phon: 'pʰɔ'
      },
      {
        orth: 'ବ',
        phon: 'bɔ'
      },
      {
        orth: 'ଭ',
        phon: 'b̤ɔ'
      },
      {
        orth: 'ମ',
        phon: 'mɔ'
      },
    ],
    [{
        orth: 'ଯ',
        phon: 'd͡ʒɔ'
      },
      {
        orth: 'ର',
        phon: 'rɔ'
      },
      {
        orth: 'ଳ',
        phon: 'ɭɔ'
      },
      {
        orth: 'ୱ',
        phon: 'wɔ'
      },
      {
        orth: 'ଵ',
        phon: 'vɔ'
      },
      {
        orth: 'ଶ',
        phon: 'ʃɔ'
      },
      {
        orth: 'ଷ',
        phon: 'ʂɔ'
      },
      {
        orth: 'ସ',
        phon: 'sɔ'
      },
      {
        orth: 'ହ',
        phon: 'hɔ'
      },
      {
        orth: 'କ୍ଷ',
        phon: 'kʰjɔ'
      },
      {
        orth: 'ୟ',
        phon: 'jɔ'
      },
      {
        orth: 'ଲ',
        phon: 'lɔ'
      },
    ],
    [{
        orth: '୍',
        phon: '∅'
      },
      {
        orth: 'ଂ',
        phon: 'N'
      },
      {
        orth: 'ଁ',
        phon: 'Ṽ'
      },
    ],
    [{
        orth: '୦',
        phon: '0'
      },
      {
        orth: '୧',
        phon: '1'
      },
      {
        orth: '୨',
        phon: '2'
      },
      {
        orth: '୩',
        phon: '3'
      },
      {
        orth: '୪',
        phon: '4'
      },
      {
        orth: '୫',
        phon: '5'
      },
      {
        orth: '୬',
        phon: '6'
      },
      {
        orth: '୭',
        phon: '7'
      },
      {
        orth: '୮',
        phon: '8'
      },
      {
        orth: '୯',
        phon: '9'
      },
    ]
  ];

  keys.forEach(function(row) {
    $('#keys').append("<div class='row'></div>");
    row.forEach(function(key) {
      var lastKey = $('#keys div').last();
      lastKey.append("<span class='key'>&nbsp;" + key.phon + "&nbsp;<input type='button' value='" + key.orth + "'></span>");
      var lastButton = $('#keys div input').last();
      lastButton.click(function() {
        console.log('Pressed ' + key.orth + '=' + key.phon);
        var box = $("#text");
        box.val(box.val() + key.orth);
      });
    });
  });
});
