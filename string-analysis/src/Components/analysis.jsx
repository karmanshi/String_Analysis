import { React, useState } from 'react'
import { total_Number_Words, total_Number_character, total_Number_Spaces, Unique_Words, Unique_Characters } from './logic'
const Analysis = () => {
  const [textInput, setTextInput] = useState('')
  const [words, setWords] = useState('')
  const [character, setCharacter] = useState('')
  const [spaces, setSpaces] = useState('')
  const [uniqueWord, setUniqueWord] = useState('')
  const [uniqueCharacter, setUniqueCharacter] = useState('')

  const handleInput = (e) => {
    setTextInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setWords(total_Number_Words(textInput))
    setCharacter(total_Number_character(textInput))
    setSpaces(total_Number_Spaces(textInput))
    setUniqueWord(Unique_Words(textInput))
    setUniqueCharacter(Unique_Characters(textInput))

  }

  const handleReset = () => {
    setTextInput('')
    setWords('')
    setCharacter('')
    setSpaces('')
    setUniqueWord('')
    setUniqueCharacter('')
  }



  return (
    <>
      <form className='m-5 p-5'>
        <div className="w-full  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
              <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 font-semibold text-lg">
              String Analysis
              </div>

            </div>

          </div>
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea

              id="editor"
              rows={8}
              className="block w-full p-2 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a Text..."
              required=""
              value={textInput}
              onChange={handleInput}

            />
          </div>
        </div>
        <button
          type="submit"
          className="m-2  inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="m-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-900 hover:bg-blue-800"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
      <div className="m-4 p-5 grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Words
          </label>
          <input
            type="text"
            id="word"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="words"
            required=""
            value={words}
          />
        </div>

        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Character
          </label>
          <input
            type="text"
            id="word"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="character"
            required=""
            value={character}
          />
        </div>

        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Space
          </label>
          <input
            type="text"
            id="word"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="space"
            required=""
            value={spaces}
          />
        </div>

        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Unique Words
          </label>
          <input
            type="text"
            id="word"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="unique words"
            required=""
            value={uniqueWord}
          />
        </div>

        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Unique Chracter
          </label>
          <input
            type="text"
            id="word"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="unique character"
            required=""
            value={uniqueCharacter}
          />
        </div>
      </div>
    </>



  )
}

export default Analysis