import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>      
      <section>
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-10">
          <div class="flex-shrink-0">
            <img src={logo} className="h-12 w-12" alt="logo" />
          </div>
          <div>
            <div class="text-xl font-medium text-black">Tailwind Example</div>
            <p class="text-gray-500">New React tailwind component</p>
          </div>
        </div>
      </section>
      <section class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-10">
        <div class="flex flex-row">
          <div class="w-6 h-6 bg-black text-white flex items-center">1</div>
          <div class="w-6 h-6 bg-black text-white flex items-center">2</div>
          <div class="w-6 h-6 bg-black text-white flex items-center">3</div>
        </div>
      </section>
      <section class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-10">
        <div class="grid justify-items-start">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </section>
      <section class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-10">
        <div class="rounded-full py-3 px-6 bg-black text-white">Pill Shape</div>
        <div class="rounded-full h-24 w-24 bg-black text-white flex items-center justify-center">Circle</div>
      </section>
    </div>
  );
}

export default App;
