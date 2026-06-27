function App() {
  return (
    <div>
      {/* <!-- All sides --> */}
      <div class="p-4">Padding all around</div>

      {/* <!-- Horizontal (left & right) --> */}
      <div class="px-4">Padding left and right</div>

      {/* <!-- Vertical (top & bottom) --> */}
      <div class="py-4">Padding top and bottom</div>

      {/* <!-- Individual sides --> */}
      <div class="pt-4">Padding top only</div>
      <div class="pr-4">Padding right only</div>
      <div class="pb-4">Padding bottom only</div>
      <div class="pl-4">Padding left only</div>

      {/* <!-- All sides --> */}
      <div class="m-4">Margin all around</div>

      {/* <!-- Auto margins for centering --> */}
      <div class="mx-auto w-64">Centered horizontally</div>

      {/* <!-- Negative margins (useful for overlaps) --> */}
      <div class="-mt-4">Pull up by 1rem</div>

      <div className="w-96 h-auto bg-red-50 border-amber-200">
        {" "}
        this is my div
      </div>

      <p className="font-light text-lg text-red-500 bg-yellow-500/100 w-50 border-1 border-amber-950 rounded-4xl p-2 ">
        this is a para tag
      </p>

      <article class="max-w-2xl mx-auto">
        <div class="text-sm text-indigo-600 font-semibold uppercase tracking-wide">
          Tutorial
        </div>
        <h1 class="mt-2 text-3xl font-bold text-gray-900">
          Building Beautiful UIs
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          Learn how to create stunning interfaces...
        </p>
      </article>

      <div className="flex flex-row-reverse gap-3 align-bottom bg-blue-300 w-auto p-3 h-auto">
        <div className="bg-blue-700 flex-1 w-auto p-2 border rounded ml-2 text-amber-50">
          item1
        </div>
        <div className="bg-blue-700 flex-2 w-auto p-2 border rounded ml-2 text-amber-50">
          item2
        </div>
        <div className="bg-blue-700 flex-1 w-auto p-2 border rounded ml-2 text-amber-50">
          item3
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className=" col-span-4 bg-blue-400 p-2 rounded border text-amber-50 w-auto h-100 flex flex-col justify-center items-center">
          1
        </div>
        <div className="col-span-2 row-span-2 bg-blue-400 p-2 rounded border text-amber-50 w-auto h-auto flex flex-col justify-center items-center">
          2
        </div>
        <div className="bg-blue-400 p-2 rounded border text-amber-50 w-70 h-100 flex flex-col justify-center items-center">
          3
        </div>
        <div className="bg-blue-400 p-2 rounded border text-amber-50 w-70 h-100 flex flex-col justify-center items-center">
          4
        </div>
        <div className="bg-blue-400 p-2 rounded border text-amber-50 w-70 h-100 flex flex-col justify-center items-center">
          5
        </div>
        <div className="bg-blue-400 p-2 rounded border text-amber-50 w-70 h-100 flex flex-col justify-center items-center">
          6
        </div>
        <div className="bg-blue-400 p-2 rounded border text-amber-50 w-70 h-100 flex flex-col justify-center items-center">
          7
        </div>
        <div className="bg-blue-400 p-2 rounded border text-amber-50 w-70 h-100 flex flex-col justify-center items-center">
          8
        </div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 rounded text-amber-50 py-2 px-3">
        hover me
      </button>

      <input
        type="text"
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 outline-none"
        placeholder="click here to enter tect"
      />
    </div>
  );
}

export default App;
