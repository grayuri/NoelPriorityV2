"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import AnimatedTitle from '@/components/AnimatedTitle/AnimatedTitle';
import { verticalAppearence, lateralAppearence } from '@/utils/animatedAppearences';
import { getNotRedundantValues } from "../../utils/removeDuplicates"
import './CheckPrioritiesPage.scss'

export default function CheckPrioritiesPage() {
  const [savedValues, setSavedValues] = useState([])
  const [checkedValue, setCheckedValue] = useState("")
  const [isPriority, setIsPriority] = useState(false)
  const [storedValues, setStoredValues] = useState("")
  const [filteredValues, setFilteredValues] = useState([])
  const [sendButtonMessage, setSendButtonMessage] = useState("Enviar")

  const getterPriorityInputRef = useRef()

  function writeStoredValues(value) {
    setStoredValues(value)
    setSendButtonMessage("Enviar")
    setSavedValues([])
  }

  function writeCheckedValues(value) {
    setCheckedValue(value)

    if (checkedValue.startsWith("tsX")) {
      if (checkedValue.length === 10) getterPriorityInputRef.current.select()
    }
    else if (checkedValue.startsWith("tscage") || checkedValue.startsWith("tscart")) {
      if (checkedValue.length === 8) getterPriorityInputRef.current.select()
    }
  }

  function addMoreValues() {
    let previousSavedValues = ""

    savedValues.forEach(value => {
      previousSavedValues += `${value}\n`
    })

    setSavedValues([])
    setStoredValues(previousSavedValues)
    localStorage.removeItem("totes")
    setSendButtonMessage("Enviar")
  }

  function sendStoredValues() {
    if (storedValues === "") return

    const previousSavedValues = JSON.parse(localStorage.getItem("totes"))

    if (!previousSavedValues === null) localStorage.removeItem("totes")
    const values = getNotRedundantValues(storedValues)

    setFilteredValues(values)
    localStorage.setItem("totes", JSON.stringify(values))

    setSendButtonMessage("Enviados!")
  }

  function getSavedValues() {
    const values = JSON.parse(localStorage.getItem("totes"))
    if (values) setSavedValues(values)
  }

  function checkIfIsPriority() {
    if (savedValues.includes(checkedValue)) setIsPriority(true)
    else setIsPriority(false)
  }

  useEffect(() => {
    getSavedValues()
  }, [filteredValues])

  useEffect(() => {
    checkIfIsPriority()
  }, [checkedValue])

  return (
    <main className="check-priorities-page">
      <AnimatedTitle type="h2">Checador de <span className="highlight">Prioridades</span></AnimatedTitle>
      <div className="values-container">
        <motion.div className="stored-values-container"
          variants={verticalAppearence}
          initial="hidden"
          animate="visible"
        >
          <h3>IDs Armazenados</h3>
          <AnimatePresence mode='wait'>
            {
              !savedValues.length > 0
                ? (
                  <motion.textarea
                    variants={verticalAppearence}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    name="stored-values"
                    placeholder='Insira aqui os IDs Escaneáveis armazenados no Rodeo...'
                    value={storedValues}
                    onChange={(e) => writeStoredValues(e.target.value)}
                  />
                )
                : (
                  <motion.div className="values"
                    variants={verticalAppearence}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {
                      savedValues.map((value, index) => (
                        <div className="value" key={index}>{value}</div>
                      ))
                    }
                  </motion.div>
                )
            }
          </AnimatePresence>
          {
            !savedValues.length > 0
              ? <button onClick={sendStoredValues}>{sendButtonMessage}</button>
              : <button onClick={addMoreValues}>Adicionar Mais</button>
          }
        </motion.div>
        <AnimatePresence mode='wait'>
        {
          (savedValues.length > 0) && (
              <motion.section 
                className='right-side'
                variants={lateralAppearence}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div 
                  className='arrow-container'
                  initial={{
                    rotate: 180,
                  }}
                  animate={{
                    rotate: 0,
                    transition: {
                      duration: 0.24,
                      ease: "linear"
                    }
                  }}
                  exit={{ 
                    rotate: 180,
                    transition: {
                      duration: 0.24,
                      ease: "linear"
                    }
                  }}
                >
                  <ArrowForwardIcon className='arrow' />
                </motion.div>
                <div className="checker-container">
                  <h3>Verificador de Prioridades</h3>
                  <input
                    type="text"
                    name='priotity-getter'
                    onChange={(e) => writeCheckedValues(e.target.value)}
                    ref={getterPriorityInputRef}
                    placeholder='Escaneie aqui um Tote, Cage ou Cart...'
                  />
                  <div className={
                    `priority-result 
                    ${checkedValue.length === 0 ? "not-checked" : ""}
                    ${
                      (checkedValue.length > 0 && isPriority)
                      ? "priority"
                      : ""
                    }
                    ${
                      (checkedValue.length > 0 && !isPriority)
                      ? "not-priority"
                      : ""
                    }
                    `
                  }>
                      {
                        (checkedValue.length === 0) 
                        && (
                          <>
                            <div className="tote-image">
                              <img src="/images/yellow-tote.png" alt="Yellow Tote Image" />
                            </div>
                            <p className="message">
                              Escaneie o tote desejado para verificar se ele é, de fato, uma prioridade.
                            </p>
                          </>
                        )
                      }
                      {
                        (checkedValue.length > 0 && isPriority)
                        && (
                          <CheckIcon className='icon' />
                        )
                      }
                      {
                        (checkedValue.length > 0 && !isPriority)
                        && (
                          <CloseIcon className='icon' />
                        )
                      }
                  </div>
                </div>
              </motion.section>
          )
        }
        </AnimatePresence>
      </div>
    </main>
  )
}
