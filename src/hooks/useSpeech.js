/* eslint no-undef: off */
import { useState } from 'react'

const synth = window.speechSynthesis || null

/**
 * Hook for speech text
 */
export function useSpeech () {
  const [voices, setVoices] = useState([])
  if (synth === null) {
    return [() => 0, () => 0]
  }

  synth.onvoiceschanged = () => {
    const voicesLanguage = synth.getVoices()
    const voicesValue = voicesLanguage.filter(v => {
      return v.lang.includes('es-')
    })
    setVoices(voicesValue)
  }

  const handlerSpeech = (text) => {
    if (synth.speaking || voices.length === 0) {
      stopSpeech()
      return
    }

    const speech = new SpeechSynthesisUtterance(text)

    speech.voice = voices[0]
    synth.speak(speech)
  }

  const stopSpeech = () => {
    synth.cancel()
  }
  return [handlerSpeech, stopSpeech]
}
