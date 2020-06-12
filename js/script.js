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
        //      se è presente nella lista di numeri iniziali proposti all'utente (simon)
        //        --> lo vado ad inserire nella lista di numeri 'numeriCorretti'
        //        --> altrimenti lo inserisco nella lista di numeri 'numeriSbagliati'
        //      dopodichè incremento l'indice del ciclo while
        //  --> altrimenti vado avanti senza incrementare l'indice del ciclo
        if (!(isNaN(numero))) {

          for (var j = 0; j < simon.length; j++) {

            if (numero === simon[j]) {
              numeriCorretti.push(numero);
            } else if (j === simon.length - 1) {
              numeriSbagliati.push(numero);
            }
          }
          i++
        }
      }
      console.log('numeri iniziali: ' + simon);
      console.log('numeri corretti: ' + numeriCorretti);
      console.log('numeri sbagliati: ' + numeriSbagliati);
    }, 1000)

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
