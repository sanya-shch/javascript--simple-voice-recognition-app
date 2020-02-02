const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList  || window.webkitSpeechGrammarList;

const grammar = '#JSGF V1.0;';

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onstart = function () {
    console.log('start')
};

recognition.onresult = function (event) {
    const last = event.results.length - 1;
    const transcript = event.results[last][0].transcript;
    content.textContent = 'Voice Input: ' + transcript + '.';

    if(transcript.toLowerCase() === 'select steve'){
        document.querySelector('#chkSteve').checked = true;
    }
    else if (transcript.toLowerCase() === 'select tony'){
        document.querySelector('#chkTony').checked = true;
    }
    else if (transcript.toLowerCase() === 'select bruce'){
        document.querySelector('#chkBruce').checked = true;
    }
    else if (transcript.toLowerCase() === 'select nick'){
        document.querySelector('#chkNick').checked = true;
    }
};

recognition.onspeechend = function() {
    recognition.stop();
};

recognition.onerror = function(event) {
    content.textContent = 'Error occurred in recognition: ' + event.error;
};

btn.addEventListener('click', () => {
    recognition.start()
});
