import React, { PropTypes } from 'react';

import './AgilioLogo.css';

const AgilioLogo = ({ includeText }) =>{
  if (includeText) {
    return (
      <svg className="AgilioLogo" viewBox="0 0 794.741 385.677">
        <path d="M784.594,103.352c-26.166,18.491-45.588-16.308-54.956-29.639c-2.667-3.798-6.101-7.063-10.148-9.316c4.586-4.215,10.107-6.298,15.219-8.47c-9.619,4.087,35.833-19.33,56.651,11.858C798.824,78.966,792.743,97.595,784.594,103.352zM720.337,55.927c-25.939,17.42-42.368,46.117-71.022,60.976c-12.967,6.727-35.437,7.928-49.038,0.847c-18.635-9.702-27.318-31.274-16.909-56.74c9.436-23.075,30.047-41.693,52.594-51.531c6.766-2.929,12.913-4.821,19.773-6.601c6.155-1.498,11.791-2.896,17.253-2.843c40.482-0.802,62.806,12.881,84.549,30.487c14.846,12.019,15.724,12.744,22.827,22.865C766.112,40.345,732.77,47.579,720.337,55.927zM538.699,357.038c0,1.122,0,2.239,0,3.361c5.92,6.003,12.134,3.257,20.959,5.041c0,0.28,0,0.559,0,0.841c-0.56,1.12-1.115,2.239-1.678,3.361c-9.415,2.238-18.889,2.298-22.638-5.883c-8.921-15.216,7.731-28.47,16.771-32.771c7.634,0.003,9.361,1.956,13.416,5.041c0.278,0.559,0.563,1.122,0.841,1.681c-0.278,2.8-0.563,5.599-0.841,8.401C558.973,354.667,549.372,352.298,538.699,357.038zM557.98,336.03c-0.274,0-0.559,0-0.837,0c-1.678,0-3.355,0-5.03,0c-3.633,3.08-7.267,6.161-10.903,9.243c0.281,1.681,0.56,3.361,0.841,5.039c0.281,0,0.559,0,0.837,0c8.08-1.434,13.372-2.894,18.448-6.717C560.824,338.748,559.976,338.863,557.98,336.03zM500.123,246.118c-50.614,8.891-76.764-44.639-61.213-90.749c5.769-17.1,17.971-30.542,36.06-35.291c5.308-0.56,10.619-1.12,15.931-1.681C570.206,120.151,569.758,233.892,500.123,246.118zM488.381,146.126c-24.852,13.218-23.892,79.398,8.386,72.265C523.246,212.541,524.316,144.899,488.381,146.126zM437.232,360.399c-2.694,17.67-2.17,26.146-25.154,25.208c-1.398-1.681-2.797-3.363-4.193-5.044c0.56-0.837,1.119-1.678,1.679-2.519c8.4,1.054,15.515,0.911,20.965-2.522c0-2.521,0-5.039,0-7.561c-30.606,5.375-28.972-23.682-14.256-36.135c1.674-0.277,3.352-0.56,5.029-0.838c7.155-0.301,13.354,0.563,15.931,5.041C437.232,344.151,437.232,352.275,437.232,360.399zM430.528,338.551c-0.56-0.841-1.122-1.682-1.682-2.521c-2.793,0-5.589,0-8.382,0c-3.735,2.908-6.486,4.46-9.226,8.401c-0.368,9.173,0.852,12.888,4.192,17.65c5.955,1.836,10.589,1.47,15.93-0.842C431.083,353.678,430.805,346.112,430.528,338.551zM382.728,239.398c-4.825-7.9-3.679-105.698,0-115.959c1.958-1.12,3.913-2.24,5.87-3.361c8.676-0.174,17.963,0.055,24.318,1.68c7.253,11.434,6.006,99.813,2.515,118.479C408.728,245.023,388.078,247.762,382.728,239.398zM381.889,95.71c0-7.842,0-15.687,0-23.528c1.385-3.071,2.003-3.622,5.031-5.042c1.678-0.56,3.354-1.12,5.032-1.682c12.104-0.442,18.077,1.151,24.319,5.883C417.77,100.086,405.707,109.358,381.889,95.71zM394.467,369.642c-0.838,0-1.676,0-2.515,0c-0.28-0.841-0.559-1.681-0.839-2.524c-2.717-7.108-0.546-21.191-2.516-27.727c-1.678-1.122-3.355-2.239-5.031-3.361c-3.633,0.28-7.269,0.559-10.9,0.84c-0.28,0.841-0.56,1.682-0.839,2.521c-0.28,9.803-0.56,19.608-0.84,29.41c-1.676,0-3.354,0-5.031,0c-0.279-11.382-1.805-28.841,2.517-36.135c2.515-0.559,5.032-1.117,7.547-1.678C394.756,330.352,403.563,351.391,394.467,369.642zM319.837,234.357c-13.285-17.728-6.708-93.683-6.708-125.203c0-12.963-2.215-32.347,2.516-41.173c2.796-0.84,5.59-1.681,8.385-2.522c10.89-0.397,17.579,0.972,23.48,5.042c0.278,47.891,0.559,95.797,0.837,143.688c5.434,3.651,13.027,3.205,18.449,6.722C376.168,255.605,332.388,251.1,319.837,234.357zM331.576,332.667c5.1,7.142,8.818,23.695,5.032,36.976c-1.676-0.562-3.354-1.122-5.032-1.681c0.495-10.22,0.787-19.88-1.676-29.41c-3.074-0.841-6.15-1.682-9.224-2.521c-11.198,4.89-4.536,21.017-7.547,33.612c-1.397,0-2.794,0-4.193,0c0-0.562,0-1.122,0-1.681c-5.152-13.111,1.726-23.177-5.87-31.932c-3.631,0.28-7.267,0.559-10.901,0.84c-0.279,0.841-0.557,1.682-0.838,2.521c-3.257,8.424,0.464,23.594-1.676,30.251c-1.118,0-2.236,0-3.354,0c0-0.562,0-1.122,0-1.681c0-11.201,0-22.408,0-33.612c3.075-1.119,6.149-2.241,9.223-3.36c7.231,0.118,10.445,3.563,14.256,4.199C315.594,336.162,323.061,330.817,331.576,332.667zM253.592,94.87c0.282-8.403,0.56-16.807,0.841-25.208c3.352-1.401,6.708-2.801,10.061-4.204c6.428,0.562,12.858,1.122,19.288,1.682c1.396,1.4,2.792,2.801,4.191,4.201c0.344,10.429,0.494,21.018-3.354,26.889C273.753,101.521,260.642,99.851,253.592,94.87zM261.141,120.078c10.358-0.532,22.248-1.364,25.993,5.042c0,38.648,0,77.31,0,115.958c-9.843,5.016-25.581,4.147-33.542-1.681c-0.187-21.69-4.288-104.991,2.517-116.799C257.785,121.758,259.463,120.919,261.141,120.078zM262.819,330.989c13.229,2.647,14.316,22.994,10.9,38.653c-1.118,0-2.237,0-3.355,0c-0.56-0.562-1.118-1.122-1.676-1.681c0.143-10.517,0.917-20.007-0.839-27.732c-1.678-1.399-3.354-2.8-5.03-4.199c-3.915,0.84-7.828,1.681-11.741,2.521c-0.278,0.559-0.56,1.117-0.837,1.678c0,9.805,0,19.611,0,29.413c-1.4-0.281-2.796-0.562-4.192-0.841c0.479-14.167,0.951-26.095-5.871-32.771c-2.796,0.28-5.591,0.559-8.386,0.84c-1.396,0.841-2.796,1.682-4.192,2.521c0.739,8.505,2.464,23.222-0.839,30.251c-0.839,0-1.676,0-2.517,0c-0.278-0.562-0.558-1.122-0.837-1.681c-1.223-8.342-1.37-29.19,1.677-35.295c0.557-0.277,1.117-0.559,1.676-0.84c1.957-0.277,3.913-0.56,5.869-0.838c7.776-0.118,10.568,2.238,15.095,4.199C249.288,335.867,257.552,329.934,262.819,330.989zM221.728,148.648c11.494,24.443-7.719,47.058-26.832,52.097c-12.356,3.258-25.616-0.615-32.703,7.562c0,0.279,0,0.561,0,0.841c18.388,21.223,61.081-0.258,70.436,36.97c2,7.955,0.663,18.751-2.515,24.37c-19.34,34.199-135.894,32.864-110.687-21.008c3.734-7.975,12.424-10.311,18.447-15.964c-20.849-26.531-1.951-21.144,3.355-39.494c-19.953-8.565-23.665-49.64-5.87-63.86c10.582-8.458,20.93-9.48,36.897-11.765c18.525,0.11,52.909-2.142,64.565,5.882c0.965,9.705,0.875,16.715-3.352,22.688C228.745,146.718,224.152,146.735,221.728,148.648zM158,264.607c15.311,5.847,51.46,1.892,38.572-15.964c-10.28-3.051-21.018-5.056-35.218-5.044C154.399,248.565,144.212,259.343,158,264.607zM189.865,150.328c-3.424-5.567-6.678-9.689-20.125-6.721c-7.538,3.875-19.091,13.952-11.065,26.751C171.474,184.891,198.074,176.121,189.865,150.328zM130.329,330.989c7.023-0.176,11.816,0.95,15.93,3.36c1.335,13.902,1.446,31.494-0.837,42.855c-8.084,6.531-15.798,10.938-27.671,5.039c0.278-1.399,0.559-2.8,0.837-4.199c6.985,0.607,14.317,0.821,20.126-0.84c1.117-2.241,2.235-4.481,3.352-6.722c-0.278-0.841-0.557-1.682-0.837-2.521c-14.162,1.363-17.475-1.281-25.156-7.563c-1.091-8.326-1.091-13.404,0.837-21.008C121.466,336.002,124.675,333.955,130.329,330.989zM124.459,362.082c7.008,1.588,11.301,1.649,16.77-1.683c0.28-6.443,0.56-12.887,0.837-19.329c-1.396-1.679-2.792-3.359-4.192-5.04c-2.515,0-5.03,0-7.545,0c-2.237,1.681-4.474,3.361-6.708,5.04C118.272,347.472,120.656,356.197,124.459,362.082zM86.724,371.323c-19.48-8.506-17.166-31.301,0-40.334C114.118,330.285,114.043,372.225,86.724,371.323zM97.625,338.551c-3.902-1.315-5.135-2.353-10.901-2.521c-2.235,1.681-4.472,3.361-6.708,5.04c-1.701,6.308-1.674,13.865,0,20.17c1.676,1.4,3.354,2.8,5.03,4.2c5.424,0.132,9.15-0.539,12.579-1.681C102.167,355.316,102.604,346.978,97.625,338.551zM79.177,243.599c-4.003-3.374-4.738-8.903-7.546-13.445c-20.352,13.461-54.824,16.995-67.913-5.565c-5.445-9.386-4.216-17.202-0.745-25.034c9.143-20.644,21.904-26.685,46.855-31.581c8.251-1.617,15.495,0.3,20.964-2.521c0.463-6.52,0.463-6.52-1.676-12.603c-10.009-17.344-38.426-3.1-48.635,0c-4.11-3.297-10.239-10.896-10.902-19.327c15.254-12.407,22.33-14.749,46.925-17.179c51.918,0.154,48.671,22.569,48.669,77.679c0.559,15.124,1.118,30.252,1.677,45.375C99.682,242.617,88.646,245.371,79.177,243.599zM70.097,189.447c-1.012-1.592-1.978,0.73-5.928,1.302c-14.462,3.016-26.899-0.435-27.766,18.799c0.742,5.318,1.589,4.918,4.048,6.653C56.654,221.858,79.075,207.014,70.097,189.447zM13.772,330.989c26.846-1.01,27.604,23.373,15.931,37.813c-6.365,2.115-11.186,2.244-18.448,0.841c-0.278,0.278-0.559,0.556-0.836,0.841c0.202,5.406-0.133,10.273-1.679,13.443c-0.837,0-1.678,0-2.515,0c-0.28-0.561-0.559-1.122-0.839-1.683c-1.815-10.287-3.329-39.72,1.676-49.577C9.299,332.108,11.537,331.549,13.772,330.989zM12.096,364.598c4.471,0,8.945,0,13.415,0c9.963-4.701,6.69-19.132,1.678-26.047c-4.343-1.383-6.896-2.495-13.417-2.521c-1.398,1.681-2.795,3.361-4.193,5.04C11.144,347.574,9.625,359.22,12.096,364.598zM56.538,330.989c5.854-0.169,8.294,0.458,10.9,3.36c-0.279,0.559-0.559,1.12-0.839,1.681c-5.396-0.207-10.255,0.132-13.417,1.681c-0.56,10.643-1.119,21.289-1.676,31.932c-0.28,0-0.56,0-0.839,0c-3.21-1.111-1.744,0-3.354-2.524c-2.313-7.605-0.43-29.943,2.515-34.451C52.063,332.108,54.301,331.549,56.538,330.989zM167.223,330.989c5.751-0.129,8.457,0.698,11.741,2.519c0,0.281,0,0.563,0,0.842c-4.409,2.175-11.533,0.851-14.255,5.042c-0.28,9.803-0.56,19.608-0.837,29.41c-0.56,0.279-1.119,0.56-1.678,0.841c-1.118-0.562-2.236-1.122-3.355-1.681c-0.274-11.507-1.471-27.716,2.517-35.295C163.312,332.108,165.267,331.549,167.223,330.989zM206.636,346.112c-0.323-5.768-1.736-7.418-5.871-9.242c-4.193-0.281-8.385-0.56-12.578-0.84c0-1.122,0-2.241,0-3.363c0.559,0,1.118,0,1.678,0c1.118-0.559,2.237-1.117,3.354-1.678c4.192,0.561,8.387,1.119,12.579,1.678c5.404,6.999,9.915,26.411,3.354,36.976c-8.819,2.478-17.135,1.434-23.479-2.524c-0.839-1.397-1.678-2.797-2.515-4.2c0.278-2.519,0.559-5.043,0.837-7.563C188.496,345.679,198.092,349.36,206.636,346.112zM192.379,364.598c3.996,1.882,11.283,0.688,14.256-0.839c-0.28-3.082-0.56-6.163-0.839-9.243c-0.56-0.842-1.117-1.678-1.676-2.52c-3.074,0-6.15,0-9.225,0c-3.093,2.332-4.371,3.634-6.709,6.719C189.453,361.849,189.547,362.928,192.379,364.598zM355.057,320.906c-0.28,0.84-0.56,1.682-0.839,2.522c-0.56,0.277-1.119,0.559-1.678,0.836c-1.117,0-2.235,0-3.354,0c-0.56-0.836-1.117-1.677-1.676-2.519c0.559-1.399,1.116-2.803,1.676-4.202C354.074,318.17,352.733,318.235,355.057,320.906zM351.703,370.483c-0.838-0.285-1.678-0.563-2.517-0.841c0-12.323,0-24.651,0-36.976c1.679,0.282,3.356,0.563,5.032,0.841C354.516,344.32,356.582,364.037,351.703,370.483zM481.674,322.587c-0.556,2.796-1.118,5.599-1.675,8.401c0.277,0.278,0.557,0.561,0.837,0.838c3.634,0.281,7.271,0.563,10.901,0.84c-0.278,1.403-0.557,2.803-0.838,4.203c-3.911,0-7.829,0-11.741,0c-2.677,8.267-7.944,20.727-3.352,28.57c3.634,0.28,7.267,0.559,10.9,0.841c0,0.281,0,0.559,0,0.837c-0.281,0.844-0.56,1.684-0.837,2.524c-3.637,0.556-7.271,1.119-10.901,1.681c-12.106-7.291-4.006-41.055,3.353-50.417C479.441,321.465,480.556,322.025,481.674,322.587zM508.508,313.344c1.118,0.556,2.236,1.118,3.355,1.681c-1.088,6.277-4.288,9.846-2.519,16.802c7.609-0.908,10.958,0.133,15.934,3.361c3.672,11.168-0.199,22.669-3.352,33.613c-1.119,0.56-2.237,1.119-3.355,1.682c-1.085-1.786-1.03-1.217-1.678-4.202c3.778-8.589,6.948-21.727,1.678-29.411c-0.56-0.281-1.119-0.56-1.678-0.84c-6.346-0.082-8.284,1.071-11.741,3.361c-0.204,10.258-3.87,22.371-7.545,30.251c-1.396-0.281-2.797-0.562-4.192-0.841c0-0.281,0-0.559,0-0.84c4.474-17.928,8.944-35.856,13.415-53.777C507.393,313.9,507.949,313.622,508.508,313.344zM608.293,312.503c3.355,0.559,6.71,1.118,10.063,1.681c0,1.119,0,2.241,0,3.359c-0.277,0.281-0.559,0.56-0.837,0.84c-3.915,0.282-7.826,0.56-11.74,0.842c-1.957,3.081-3.912,6.161-5.871,9.242c0.281,1.119,0.563,2.241,0.841,3.359c3.352,0.281,6.707,0.563,10.063,0.84c0,0.282,0,0.563,0,0.841c-0.56,1.122-1.118,2.241-1.678,3.362c-6.003-0.2-8.548,0.526-11.741,2.521c-1.596,14.314-6.009,41.609-17.607,46.216c-0.088-1.187,13.27-56.144,15.93-62.179C597.877,318.523,604.087,315.571,608.293,312.503zM620.035,332.667c0.84,0,1.678,0,2.518,0c0,1.963,0,3.922,0,5.885c-2.21,5.294-6.582,17.272-4.196,23.53c0.563,1.117,1.119,2.239,1.679,3.358c3.073-0.278,6.147-0.563,9.226-0.842c8.948-4.48,8.538-22.708,12.578-31.932c1.396,0,2.793,0,4.193,0c-0.089,6.349-6.895,37.064-7.549,37.816c-9.883-4.132-14.194,3.698-25.997-5.043c-0.417-13.202,1.613-24.857,6.711-32.773C619.475,332.667,619.752,332.667,620.035,332.667zM666.154,321.746c0,0.279,0,0.561,0,0.842c-1.678,4.653-3.125,5.352-1.678,9.239c3.634,0.281,7.271,0.563,10.904,0.84c0,0.282,0,0.563,0,0.841c0,0.842,0,1.681,0,2.522c-0.563,0-1.119,0-1.678,0c-4.152,1.56-9.518,1.538-12.581,3.361c-3.309,12.538-11.267,27.062,8.388,26.049c-1.434,9.182-11.95,5.799-16.773,2.521c-3.431-13.111,2.688-35.904,8.386-47.056C662.798,321.183,664.476,321.465,666.154,321.746zM687.956,332.667c0.281,0.563,0.559,1.122,0.84,1.683c-2.813,8.839-8.396,22.557-3.355,31.091c0.281,0,0.559,0,0.841,0c2.792-0.278,5.589-0.563,8.386-0.842c8.608-4.416,9.089-22.646,12.575-31.932c1.399,0,2.8,0,4.191,0c-0.463,7.796-4.918,34.355-6.707,37.816c-8.209-2.769-19.682,4.803-25.152-4.202c-4.827-7.702,0.649-28.269,5.866-34.454C686.281,332.108,687.118,332.389,687.956,332.667zM731.56,330.989c3.074,0.278,6.149,0.561,9.222,0.838c0.282,1.122,0.561,2.243,0.841,3.361c-0.28,0.281-0.559,0.561-0.841,0.842c-7.12-0.451-10.985-0.171-13.415,4.199c-2.792,9.805-5.592,19.611-8.385,29.413c-0.277,0-0.559,0-0.841,0c-2.848-1.131-1.731-0.511-3.353-2.524c3.753-11.073,5.308-24.72,10.064-34.451C727.089,332.108,729.327,331.549,731.56,330.989zM640.015,177.031c-17.412,4.231-39.48-9.821-33.82-28.795c2.292-7.677,6.915-10.68,11.426-13.065c0,0,15.88-8.033,40.981,13.2c4.096,3.464,8.118,6.585,11.85,8.335C663.968,167.922,653.539,173.743,640.015,177.031zM722.026,115.209c3.043-1.283,8.097-2.896,11.95-3.282c20.344-1.241,40.559,20.736,34.675,41.61c-1.525,5.415-2.895,9.901-5.192,14.178c-9.091,16.916-26.097,31.644-45.66,38.109c-34.754,11.489-64.639-2.199-85.565-17.275c-4.18-3.013-8.413-6.235-12.036-10.331c1.136,0.669,4.193,1.873,5.735,2.295c2.579,0.71,17.777,4.8,31.525-5.452c18.72-13.963,30.965-36.682,49.35-50.536C711.209,121.208,716.861,117.388,722.026,115.209zM770.972,332.667c2.447,3.546,3.854,4.773,4.193,10.929c-6.609,12.212-19.191,5.67-28.513,14.279c1.678,2.524,3.355,5.046,5.03,7.565c5.314,0,10.626,0,15.934,0c0,0.28,0,0.559,0,0.841c-0.559,1.12-1.114,2.239-1.678,3.361c-4.193,0.556-8.386,1.119-12.578,1.681c-4.705-2.054-7.928-3.729-10.063-8.405c-5.142-17.293,6.644-26.576,16.771-31.929C763.703,331.549,767.338,332.108,770.972,332.667zM750.846,350.312c0.281,0,0.559,0,0.837,0c7.734-1.477,13.432-3.053,18.449-6.717c0-1.122,0-2.244,0-3.366c-3.023-3.058-3.63-4.121-10.064-4.199c-3.353,2.8-6.707,5.603-10.06,8.401C750.291,346.39,750.569,348.353,750.846,350.312z"/>
      </svg>
    );
  }

  return(
    <svg className="AgilioLogo" viewBox="0 0 215.835 210.097">
      <path d="M205.688,103.352c-26.166,18.491-45.588-16.308-54.956-29.639c-2.667-3.798-6.101-7.063-10.148-9.316c4.586-4.215,10.107-6.298,15.219-8.47c-9.619,4.087,35.833-19.33,56.651,11.858C219.918,78.966,213.837,97.595,205.688,103.352zM141.432,55.927c-25.939,17.42-42.368,46.117-71.022,60.976c-12.967,6.727-35.437,7.928-49.038,0.847C2.736,108.048-5.947,86.476,4.462,61.009c9.436-23.075,30.047-41.693,52.594-51.531c6.766-2.929,12.913-4.821,19.773-6.601c6.155-1.498,11.791-2.896,17.253-2.843c40.482-0.802,62.806,12.881,84.549,30.487c14.846,12.019,15.724,12.744,22.827,22.865C187.206,40.345,153.864,47.579,141.432,55.927zM61.109,177.031c-17.412,4.231-39.48-9.821-33.82-28.795c2.292-7.677,6.915-10.68,11.426-13.065c0,0,15.88-8.033,40.981,13.2c4.096,3.464,8.118,6.585,11.85,8.335C85.063,167.922,74.633,173.743,61.109,177.031zM143.12,115.209c3.043-1.283,8.097-2.896,11.95-3.282c20.344-1.241,40.559,20.736,34.675,41.61c-1.525,5.415-2.895,9.901-5.192,14.178c-9.091,16.916-26.097,31.644-45.66,38.109c-34.754,11.489-64.639-2.199-85.565-17.275c-4.18-3.013-8.413-6.235-12.036-10.331c1.136,0.669,4.193,1.873,5.735,2.295c2.579,0.71,17.777,4.8,31.525-5.452c18.72-13.963,30.965-36.682,49.35-50.536C132.304,121.208,137.955,117.388,143.12,115.209z"/>
    </svg>
  );
}; 

AgilioLogo.propTypes = {
  includeText: PropTypes.bool.isRequired
};

AgilioLogo.defaultProps = {
  includeText: false
};

export default AgilioLogo;
