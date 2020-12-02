javascript:(
  () => {
    const count = {
      words: 0,
      letters: 0
    }
    const countTextNodes = (node) => {
      node.childNodes.forEach(el => {
        // If this is a text node, replace the text
        if (el.nodeType === 3) {
          // Ignore this node it it an empty text node
          if (el.nodeValue.trim() === "") {
            return
          }

          const wordsArray = el.nodeValue.split(' ')

          count.words += wordsArray.length
          count.letters += el.nodeValue.replaceAll(' ', '').length
          // Else recurse on this node
        } else {
          countTextNodes(el);
        }
      });
    }

    countTextNodes(document.body)


    alert(`We have:
    - ${count.words} words
    - ${count.letters} letters
    `)
  }
)()


// minified
javascript:(()=>{const e={words:0,letters:0},t=l=>{l.childNodes.forEach(l=>{if(3===l.nodeType){if(""===l.nodeValue.trim())return;const t=l.nodeValue.split(" ");e.words+=t.length,e.letters+=l.nodeValue.replaceAll(" ","").length}else t(l)})};t(document.body),alert(`We have:\n    - ${e.words} words\n    - ${e.letters} letters\n    `)})();