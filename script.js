window.onload = async (event) => {
    let gallery = document.querySelector('.gallery');

    let response = await (fetch('https://picsum.photos/v2/list?page=2&limit=6'));

    let images = await response.json();

    let html = '';

    images.forEach(img => {
        html += `<div class="item">
                    <img class="image" src="${img.download_url}" alt="">
                    <div class="image-caption">
                        <div>
                            <h2>${img.author}</h2>
                            <p>245 likes - 35 shares</p>
                        </div>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m7 17.95l5-2.15l5 2.15V5H7v12.95Zm-.6 2.45q-.5.2-.95-.088T5 19.476V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v14.475q0 .55-.45.838t-.95.087L12 18l-5.6 2.4ZM7 5h10H7Z" />
                        </svg>
                    </div>
                </div>`;
    })

    gallery.innerHTML = html;
}