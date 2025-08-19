export default function PanierVide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Votre panier est vide&nbsp;!
      </h1>
      <p className="mb-6 text-center">Laissez-nous vous aider à le remplir</p>
      <button
        className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-6 rounded transition-colors"
        type="button"
      >
        Je m'inspire
      </button>
    </div>
  );
}
