

function Input({label, type, id, place}) {
  return (
    <div>
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                {label}
              </label>
              <div className="mt-1">
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={place}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-purple sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  )
}

export default Input
