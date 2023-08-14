document.addEventListener('DOMContentLoaded', function () {
    const liveAlertBtn = document.getElementById('liveAlertBtn');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    inputContainer.innerHTML = `
      <label for="manualInput">Cómo está el día?:</label>
      <input type="text" id="manualInput" class="form-control">
      <button type="button" class="btn btn-secondary" id="submitInput">Enviar</button>
    `;

    liveAlertBtn.addEventListener('click', function () {
        document.body.appendChild(overlay);
        overlay.appendChild(inputContainer);

        const submitInputBtn = document.getElementById('submitInput');
        submitInputBtn.addEventListener('click', function () {
            const manualInput = document.getElementById('manualInput');
            if (manualInput.value.trim() !== '') {
                const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
                const appendAlert = (message, type) => {
                    const wrapper = document.createElement('div')
                    wrapper.innerHTML = [
                        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                        `   <div>${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`,
                        '</div>'
                    ].join('')
                    alertPlaceholder.append(wrapper);

                    const closeButton = wrapper.querySelector('.btn-close');
                    closeButton.addEventListener('click', function () {
                        alertPlaceholder.removeChild(wrapper);
                    });
                }
                appendAlert(`El día está ${manualInput.value}`, 'success')
                document.body.removeChild(overlay);
            } else {
                const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
                const appendAlert = (message, type) => {
                    const wrapper = document.createElement('div')
                    wrapper.innerHTML = [
                        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                        `   <div>${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`,
                        '</div>'
                    ].join('')
                    alertPlaceholder.append(wrapper);

                    const closeButton = wrapper.querySelector('.btn-close');
                    closeButton.addEventListener('click', function () {
                        alertPlaceholder.removeChild(wrapper);
                    });
                }
                appendAlert(`Debe ingresar un valor`, 'info')
                document.body.removeChild(overlay);
            }
        });
    });
});

var widgetGenerated = false;

document.getElementById('liveAlertBtn2').addEventListener('click', function () {
    var weatherWidget = document.getElementById('weather-widget-container');

    if (widgetGenerated == false) {
        weatherWidget.style.display = 'block';
        window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
        window.myWidgetParam.push({
            id: 12,
            cityid: '3836277',
            appid: '4b5614d5227096c2c15fff9916399777',
            units: 'metric',
            containerid: 'weather-widget-container',
        });

        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);

        widgetGenerated = true;

        var closeButton = document.createElement('button');
        closeButton.id = 'closeWidgetButton';
        closeButton.className = 'close-button';
        closeButton.innerText = 'X';

        document.body.appendChild(closeButton);

        closeButton.addEventListener('click', function () {
            document.body.removeChild(closeButton);
            if (weatherWidget) {
                weatherWidget.style.display = 'none';
                widgetGenerated = false;
            }
        });
    }

});