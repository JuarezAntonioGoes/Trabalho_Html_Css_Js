export default function Loading() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.load').classList.add('hidden');
        }, 700)
    })
}