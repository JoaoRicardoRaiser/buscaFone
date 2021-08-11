
const Respostas = (($) => {
  const controlStorage = (q, r) => {
    let resp = localStorage.getItem('respostas');
    resp = JSON.parse(resp)
    if (resp) {

      if (resp[q]) {
        resp[q] = r;
        localStorage.setItem('respostas', JSON.stringify(resp))
      } else {
        let obj = {};
        obj[q] = r;
        resp = Object.assign(resp, obj)
        localStorage.setItem('respostas', JSON.stringify(resp))
      }

    } else {
      let obj = {};
      obj[q] = r;
      localStorage.setItem('respostas', JSON.stringify(obj))
    }
  };

  // MUDAR CHAMADA PARA O BACKEND
  const getRes = () => {
    let respostas = localStorage.getItem('respostas');
    respostas = JSON.parse(respostas);

    if (!respostas) {
      alert('Você precisa responder as questões!')
      return
    }

    Model('http://127.0.0.1:5000/buscar-celulares', 'POST', respostas).then((res) => {
      // sucesso
      localStorage.clear('respostas');
      $(`<p>${res.title}</p>`).appendTo('.resultado')
      $(`<p>${res.title}</p>`).appendTo('.intro-lead-in')
      $(`<p>${res.title}</p>`).appendTo('.intro-heading')

    }).catch((e) => {
      const error = e.message
      alert(error);
    });    
  }


  $('.q1r1').click(() => {
    Respostas.ctrlStorage('desempenho', 8)
  })
  $('.q1r2').click(() => {
    Respostas.ctrlStorage('desempenho', 6)
  })
  $('.q1r3').click(() => {
    Respostas.ctrlStorage('desempenho', 3)
  })


  $('.q2r1').click(() => {
    Respostas.ctrlStorage('armazenamento', 32)
  })
  $('.q2r2').click(() => {
    Respostas.ctrlStorage('armazenamento', 64)
  })
  $('.q2r3').click(() => {
    Respostas.ctrlStorage('armazenamento', 128)
  })


  $('.q3r1').click(() => {
    Respostas.ctrlStorage('tamanho_tela', 6)
  })
  $('.q3r2').click(() => {
    Respostas.ctrlStorage('tamanho_tela', 5)
  })
  $('.q3r3').click(() => {
    Respostas.ctrlStorage('tamanho_tela', 0)
  })


  $('.q4r1').click(() => {
    Respostas.ctrlStorage('qualidade_tela', 8)
  })
  $('.q4r2').click(() => {
    Respostas.ctrlStorage('qualidade_tela', 6)
  })
  $('.q4r3').click(() => {
    Respostas.ctrlStorage('qualidade_tela', 3)
  })


  $('.q5r1').click(() => {
    Respostas.ctrlStorage('camera', 8)
  })
  $('.q5r2').click(() => {
    Respostas.ctrlStorage('camera', 6)
  })
  $('.q5r3').click(() => {
    Respostas.ctrlStorage('camera', 3)
  })


  $('.q6r1').click(() => {
    Respostas.ctrlStorage('bateria', 5000)
  })
  $('.q6r2').click(() => {
    Respostas.ctrlStorage('bateria', 5000)
  })
  $('.q6r3').click(() => {
    Respostas.ctrlStorage('bateria', 5000)
  })


  $('.q7').click(() => {
    const value = $('.input-q7')[0].value;
    if (value) {
      Respostas.ctrlStorage('preco_maximo', value);
    } else {
      alert('Adicione um Valor');
    }
  })

  return {
    ctrlStorage: controlStorage,
    getResultados: getRes
  }
  
})(jQuery);