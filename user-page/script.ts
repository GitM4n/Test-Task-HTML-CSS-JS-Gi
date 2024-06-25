interface IUser{
    id:number
    firstName:string
    lastName:string
    email:string
    phone:string
    gender:'female' | 'male'
    [key:string]:any

}

const apiUrl = 'http://dummyjson.com/users';

console.log(apiUrl)
document.addEventListener('DOMContentLoaded', () => {
    const userListElement = document.getElementById('user-list')!;
    const userDetailsElement = document.getElementById('user-details')!;
    const usersElement = document.getElementById('users')!;
    const detailsElement = document.getElementById('details')!;
    const backButton = document.getElementById('back-button')!;

    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            data.users.forEach((user:IUser) => {
                const userElement = document.createElement('li');
                userElement.textContent = `${user.firstName} ${user.lastName}`;
                userElement.addEventListener('click', () => showUserDetails(user));
                usersElement.appendChild(userElement);
            }) as IUser[];
            userListElement.classList.remove('hidden');
        });

    function showUserDetails(user: IUser) {
        userListElement.classList.add('hidden');

         const imgSrc = `https://xsgames.co/randomusers/avatar.php?g=${user.gender === 'male' ? 'male' : 'female'}&seed=${user.id}`


        detailsElement.innerHTML = `
                <article class="user-card">
                    <div class="user-card__image">
                        <img src="${imgSrc}" alt="user-picture">
                        <h2 class="user-card__name">
                            ${user.firstName}
                            <span class="regular"> ${user.lastName}</span>
                        </h2>
                    </div>
                    <div class="user-card__description">
                        <div class="user-card__about">
                            <h4 class="user-card__about_title">About</h4>
                            <p class="user-card__about_text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui omnis iste aliquam, eveniet blanditiis aliquid dignissimos assumenda, hic iusto, fugit veritatis neque mollitia exercitationem doloremque nisi. Veniam repellendus enim quae.
                            </p>
                        </div>
                        <div class="user-card__contacts">
                            <h4 class="user-card__contacts_title">Contacts</h4>
                            <div class="user-card__contacts_body">
                                <div class="phone">
                                    <div class="phone__icon">
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 547.597 547.597" style="enable-background:new 0 0 547.597 547.597;" xml:space="preserve"><g><g><path d="M409.997,0H137.599c-13.971,0-25.264,11.312-25.264,25.264v497.059c0,13.961,11.303,25.273,25.264,25.273h272.397 c13.952,0,25.265-11.312,25.265-25.273V25.264C435.27,11.303,423.949,0,409.997,0z M245.885,29.816h55.807 c2.917,0,5.269,2.353,5.269,5.269s-2.352,5.269-5.269,5.269h-55.807c-2.897,0-5.269-2.353-5.269-5.269 S242.988,29.816,245.885,29.816z M307.497,502.653H240.09c-5.527,0-10.012-4.476-10.012-10.003 c0-5.526,4.485-10.002,10.012-10.002h67.406c5.526,0,9.992,4.476,9.992,10.002C317.489,498.178,313.033,502.653,307.497,502.653z M403.685,443.69H143.911V85.642h259.774V443.69z"></path></g></g></svg>
                                    </div>
                                    <a class="phone__text" href="tel:${user.phone}">${user.phone}</a>
                                </div>
                                <div class="mail">
                                    <div class="mail__icon">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.84 452.84" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 452.84 452.84"><g><path d="m449.483,190.4l.001-.001-57.824-38.335v-128.134c0-4.142-3.358-7.5-7.5-7.5h-315.49c-4.142,0-7.5,3.358-7.5,7.5v128.143l-57.814,38.326 .001,.002c-2.022,1.343-3.357,3.639-3.357,6.249v232.26c0,4.142 3.358,7.5 7.5,7.5h437.84c4.142,0 7.5-3.358 7.5-7.5v-232.26c0-2.61-1.335-4.906-3.357-6.25zm-388.313,26.229l-23.525-12.479h23.525v12.479zm-46.17-7.511l172.475,91.49-172.475,114.327v-205.817zm211.417,83.671l194.037,128.621h-388.073l194.036-128.621zm38.945,7.82l172.477-91.491v205.821l-172.477-114.33zm126.298-96.459h23.536l-23.536,12.484v-12.484zm28.794-15h-28.794v-19.09l28.794,19.09zm-43.794-157.72v193.161l-125.527,66.586-20.573-13.637c-2.511-1.665-5.776-1.665-8.287,0l-20.57,13.635-125.533-66.589v-193.156h300.49zm-315.49,157.72h-28.782l28.782-19.08v19.08z"></path><path d="m226.415,213.671h59.754c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-59.754c-28.813,0-52.254-23.441-52.254-52.254v-2.213c0-28.813 23.441-52.254 52.254-52.254s52.254,23.441 52.254,52.254v5.533c0,6.237-5.074,11.312-11.312,11.312s-11.312-5.074-11.312-11.312v-10.512c0-17.864-14.533-32.398-32.397-32.398s-32.397,14.533-32.397,32.398c0,17.864 14.533,32.397 32.397,32.397 8.169,0 15.636-3.045 21.34-8.052 4.644,7.483 12.932,12.478 22.369,12.478 14.508,0 26.312-11.803 26.312-26.312v-5.533c0-37.084-30.17-67.254-67.254-67.254s-67.254,30.17-67.254,67.254v2.213c5.68434e-14,37.085 30.17,67.255 67.254,67.255zm-2.767-57.049c-9.593,0-17.397-7.804-17.397-17.397s7.805-17.398 17.397-17.398 17.397,7.805 17.397,17.398-7.804,17.397-17.397,17.397z"></path></g></svg>
                                    </div>
                                    <a class="mail__text" href="mailto:${user.email}">${user.email}</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>`
;
        userDetailsElement.classList.remove('hidden');
    }

    backButton.addEventListener('click', () => {
        userDetailsElement.classList.add('hidden');
        userListElement.classList.remove('hidden');
    });
});















const userCardMarkup = `
<article class="user-card">
                    <div class="user-card__image">
                        <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="user-picture">
                        <h2 class="user-card__name">
                            Some
                            <span class="regular">Name</span>
                        </h2>
                    </div>
                    <div class="user-card__description">
                        <div class="user-card__about">
                            <h4 class="user-card__about_title">About</h4>
                            <p class="user-card__about_text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui omnis iste aliquam, eveniet blanditiis aliquid dignissimos assumenda, hic iusto, fugit veritatis neque mollitia exercitationem doloremque nisi. Veniam repellendus enim quae.
                            </p>
                        </div>
                        <div class="user-card__contacts">
                            <h4 class="user-card__contacts_title">Contacts</h4>
                            <div class="user-card__contacts_body">
                                <div class="phone">
                                    <div class="phone__icon">
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 547.597 547.597" style="enable-background:new 0 0 547.597 547.597;" xml:space="preserve"><g><g><path d="M409.997,0H137.599c-13.971,0-25.264,11.312-25.264,25.264v497.059c0,13.961,11.303,25.273,25.264,25.273h272.397 c13.952,0,25.265-11.312,25.265-25.273V25.264C435.27,11.303,423.949,0,409.997,0z M245.885,29.816h55.807 c2.917,0,5.269,2.353,5.269,5.269s-2.352,5.269-5.269,5.269h-55.807c-2.897,0-5.269-2.353-5.269-5.269 S242.988,29.816,245.885,29.816z M307.497,502.653H240.09c-5.527,0-10.012-4.476-10.012-10.003 c0-5.526,4.485-10.002,10.012-10.002h67.406c5.526,0,9.992,4.476,9.992,10.002C317.489,498.178,313.033,502.653,307.497,502.653z M403.685,443.69H143.911V85.642h259.774V443.69z"></path></g></g></svg>
                                    </div>
                                    <a class="phone__text" href="tel:+">+77 998989 9889</a>
                                </div>
                                <div class="mail">
                                    <div class="mail__icon">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.84 452.84" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 452.84 452.84"><g><path d="m449.483,190.4l.001-.001-57.824-38.335v-128.134c0-4.142-3.358-7.5-7.5-7.5h-315.49c-4.142,0-7.5,3.358-7.5,7.5v128.143l-57.814,38.326 .001,.002c-2.022,1.343-3.357,3.639-3.357,6.249v232.26c0,4.142 3.358,7.5 7.5,7.5h437.84c4.142,0 7.5-3.358 7.5-7.5v-232.26c0-2.61-1.335-4.906-3.357-6.25zm-388.313,26.229l-23.525-12.479h23.525v12.479zm-46.17-7.511l172.475,91.49-172.475,114.327v-205.817zm211.417,83.671l194.037,128.621h-388.073l194.036-128.621zm38.945,7.82l172.477-91.491v205.821l-172.477-114.33zm126.298-96.459h23.536l-23.536,12.484v-12.484zm28.794-15h-28.794v-19.09l28.794,19.09zm-43.794-157.72v193.161l-125.527,66.586-20.573-13.637c-2.511-1.665-5.776-1.665-8.287,0l-20.57,13.635-125.533-66.589v-193.156h300.49zm-315.49,157.72h-28.782l28.782-19.08v19.08z"></path><path d="m226.415,213.671h59.754c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-59.754c-28.813,0-52.254-23.441-52.254-52.254v-2.213c0-28.813 23.441-52.254 52.254-52.254s52.254,23.441 52.254,52.254v5.533c0,6.237-5.074,11.312-11.312,11.312s-11.312-5.074-11.312-11.312v-10.512c0-17.864-14.533-32.398-32.397-32.398s-32.397,14.533-32.397,32.398c0,17.864 14.533,32.397 32.397,32.397 8.169,0 15.636-3.045 21.34-8.052 4.644,7.483 12.932,12.478 22.369,12.478 14.508,0 26.312-11.803 26.312-26.312v-5.533c0-37.084-30.17-67.254-67.254-67.254s-67.254,30.17-67.254,67.254v2.213c5.68434e-14,37.085 30.17,67.255 67.254,67.255zm-2.767-57.049c-9.593,0-17.397-7.804-17.397-17.397s7.805-17.398 17.397-17.398 17.397,7.805 17.397,17.398-7.804,17.397-17.397,17.397z"></path></g></svg>
                                    </div>
                                    <a class="mail__text" href="mailto:">mail@mail.ru</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>`


 