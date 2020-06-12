// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire in un prompt alla volta
// i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati

$(document).ready(
  function() {

    // Genero un array di 5 numeri casuali da 1 a 100 e lo mostro all'utente
    var simon = randomIntArrayLength(5, 1, 100);
    alert(simon);

    // Dopo che l'utente ha dato l'ok, faccio partire un timer di 30 secondi.
    // Allo scadere del timer, chiedo all'utente di inserire i 5 numeri da controllare
    setTimeout(function() {

      var numeriCorretti = [];
      var numeriSbagliati = [];
      var i = 0;
      while ( i < simon.length ) {
        var numero = parseInt(prompt('Inserisci il ' + (i + 1) + '° numero'));

        // faccio un controllo del numero:
        // se il valore inserito dall'utente è un numero,
        //  --> lo confronto con i numeri iniziali:
        //      se è incluso nella lista di numeri iniziali proposti all'utente (simon)
        //        --> lo vado ad inserire nella lista di numeri 'numeriCorretti'
        //            e lo appendo alla lista $(.corretti)
        //        --> altrimenti lo inserisco nella lista di numeri 'numeriSbagliati'
        //            e lo appendo alla lista $(.sbagliati)
        //      dopodichè stampo anche tutti i numeri generati inizialmente dal computer in $('.simon')
        //      e incremento l'indice del ciclo while
        //  --> altrimenti vado avanti senza incrementare l'indice del ciclo
        if (!(isNaN(numero))) {

          if (simon.includes(numero)) {
            numeriCorretti.push(numero);
            $('.corretti').append('<li>&nbsp' + numero + ',</li>').css({
              'color':'green',
              'font-size':'20px',
              'list-style-type': 'none'
            })
          } else {
            numeriSbagliati.push(numero);
            $('.sbagliati').append('<li>&nbsp' + numero + ',</li>').css({
              'color':'red',
              'font-size':'20px',
              'list-style-type': 'none'
            })
          }
        }
        $('.simon').append('<li>&nbsp' + simon[i] + ',</li>').css({
          'color':'darkblue',
          'font-size':'20px',
          'list-style-type': 'none'
        })
        i++
      }
      // console.log('numeri iniziali: ' + simon);
      // console.log('numeri corretti: ' + numeriCorretti);
      // console.log('numeri sbagliati: ' + numeriSbagliati);
    }, 3000)

    //          FUNZIONI          //
    // NUMERO CASUALE (Range)
    // Ritorna un NUMERO
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Genero un array di lunghezza variabile
    // contenente un range di numeri random NON RIPETUTI
    function randomIntArrayLength(arrayLength, min, max) {
      var i = 0;
      var array = [];

      while (i < arrayLength) {

        var n = randomInt(min, max);
        if (!(array.includes(n))) {

          array.push(n);
          i++;
        }
      }
      return array;
    }
  }
);
