'use strict';

document.addEventListener('DOMContentLoaded', () => { //Скрипт сработает при загрузке DOM структуры
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };
    
    const promo = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        bg = document.querySelector('.promo__bg'),
        filmsList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('.add button'),
        input = document.querySelector('.adding__input'),
        favoriteFilms = document.querySelector('input[type="checkbox"]');
    
        
    addForm.addEventListener('click', function(event) {
        event.preventDefault();
    
        if (favoriteFilms.checked == true) {
            console.log('Добавляем любимый фильм');
        }
    
        if (input.value.length > 21) {
            movieDB.movies.push(`${input.value.slice(0, 21)}...`);  
            sortArray(movieDB.movies);
        } else {
            movieDB.movies.push(input.value);
            sortArray(movieDB.movies);
        }
        input.value = '';
        
        createMovieList(movieDB.movies, filmsList);
        
        deleteCurrentFilm();
    });



    function createMovieList(films, parent) {
        parent.innerHTML = '';

        films.filter(word => word.length > 0).forEach((item, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}: ${item}
                <div class="delete"></div>
            </li>`;
        });
    }
    
    function deleteCurrentFilm() {
        const deleteFilm = document.querySelectorAll('.delete');
        deleteFilm.forEach(function (item, i) {
            item.addEventListener('click', function () {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1, '');
            });
        });
    }

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArray = (arr) => {
        arr.sort();
    };


    sortArray(movieDB.movies);
    makeChanges();
    createMovieList(movieDB.movies, filmsList);
    deleteCurrentFilm();
    deleteAdv(promo);  
});

           

    









