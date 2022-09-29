const d = document;

export function NarratorSystem(){

    const $textArea = d.querySelector('#voice-text');

    const $voiceSelector = d.getElementById('voice-select');

    let voices;

    window.speechSynthesis.onvoiceschanged = ()=>{

        voices = window.speechSynthesis.getVoices();
        
        for (let i = 0; i < voices.length; i++) {
            const $option = document.createElement('option');
            $option.textContent = `${voices[i].name} (${voices[i].lang})`;
      
            $option.setAttribute('data-lang', voices[i].lang);
            $option.setAttribute('data-name', voices[i].name);
            $voiceSelector.appendChild($option);
        }
    }
    d.addEventListener('click', (e)=>{
        if(e.target.matches('#read-btn')){
           let text = new SpeechSynthesisUtterance($textArea.value)
           text.lang = $voiceSelector.selectedOptions[0].getAttribute('data-lang');
           text.name = $voiceSelector.selectedOptions[0].getAttribute('data-name');
           speechSynthesis.speak(text); 
        }
    })


}
