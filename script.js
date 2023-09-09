function search() {
    const buscar = document.getElementById('buscarInput').value;
    const headings = document.querySelectorAll('h2, h3, h4, p');
  
    headings.forEach(heading => {
      const text = heading.textContent;
      const pattern = new RegExp(buscar, 'gi');
      const highlightedText = text.replace(
        pattern,
        match => `<span class="highlight">${match}</span>`
      );
  
      heading.innerHTML = highlightedText;
  
      setTimeout(() => {
        heading.innerHTML = text;
      }, 2000);
    });
  
    if (!headings.some(heading => heading.innerHTML.includes('highlight'))) {
      alert('Nenhuma correspondência encontrada.');
    }
  }