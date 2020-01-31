import React from "react";
import PropTypes from "prop-types";

import "./UtcnLogo.css";

const UtcnLogo = ({ fillColor, includeText }) => {
  if (includeText) {
    return (
      <svg className="UtcnLogo" viewBox="0 0 795.265 512.758" fill={fillColor}>
        <path d="M257.193,0.813c30.388,0,60.785,0,91.172,0c11.477,0,29.103-2.153,35.874,2.991c7.901,9.266,2.988,44.385,2.988,59.797c0,54.807,0,109.631,0,164.438c-17.461,0.143-29.609-5.548-43.346-8.968c-5.032-15.261-1.493-41.625-1.493-59.796c0-42.851,0-85.712,0-128.563c-1.571-2.149-2.33-5.863-2.989-8.968c-2.99-2.491-5.979-4.983-8.97-7.475c-24.41,0-48.826,0-73.236,0C257.193,9.783,257.193,5.298,257.193,0.813zM533.701,0.813c0,4.486,0,8.971,0,13.456c-24.412-0.167-54.453-2.752-76.225,1.494c-10.099,16.072-7.474,39.633-7.474,65.777c0,45.34,0,90.696,0,136.036c-14.722,3.634-27.02,9.969-46.335,10.463c0-48.329,0-96.674,0-145.004c0-24.982-2.779-55.389,1.495-77.736c2.64-1.437,2.513-1.879,5.979-2.99c6.544-4.093,24.858-1.496,34.375-1.496C474.91,0.813,504.311,0.813,533.701,0.813zM257.193,29.217c18.553-0.445,55.709-4.622,64.268,5.979c6.416,8.509,2.991,34.017,2.991,47.838c0,41.353,0,82.721,0,124.077c-0.996,0-1.992,0-2.991,0c-11.166-11.319-27.757-16.971-37.365-29.898C256.188,139.662,257.208,95.054,257.193,29.217zM533.701,29.217c1.121,76.625,0.749,119.057-37.364,156.964c-8.106,8.063-17.27,17.646-29.893,20.93c0-55.307,0-110.629,0-165.935c1.651-2.069,2.231-4.295,2.989-7.475C484.276,26.937,512.094,29.095,533.701,29.217zM412.635,284.847c13.332-0.273,20.565,2.184,29.893,4.484c0,0.997,0,1.994,0,2.99c-3.5,4.671-3.383,10.671-8.968,13.454c-2.892-2.857-9.047-4.54-11.955-2.989c-1.495,0.497-2.991,0.995-4.484,1.494c0,0.997,0,1.993,0,2.988c9.874,1.851,19.223,4.7,23.914,11.96c2.853,3.553,3.072,8.203,2.989,14.949c-2.463,2.604-2.238,5.876-4.485,8.971c-3.486,2.491-6.974,4.982-10.462,7.474c-16.471,1.516-27.159-0.278-38.86-5.979c2.173-6.233,3.416-14.621,10.461-16.444c3.886,3.787,9.167,5.518,16.443,5.979c0.8-2.267,1.009-2.531,1.493-5.979c-14.125-4.956-25.528-5.744-25.408-25.413c1.653-2.069,2.234-4.295,2.989-7.476C400.938,292.344,408.042,288.635,412.635,284.847zM0.114,286.341c7.972,0,15.944,0,23.914,0c-0.623,15.927-4.654,43.661,8.968,46.343c0.498-0.997,0.997-1.994,1.496-2.991c5.874-7.576,3.215-30.64,2.989-43.352c7.471,0,14.946,0,22.418,0c0.088,20.692,0.494,35.303-1.494,52.322c-21.776,15.714-20.319,15.647-49.323,7.475C-1.105,330.062-0.063,313.147,0.114,286.341zM76.34,286.341c7.971,0,15.944,0,23.916,0c3.456,11.347,12.678,18.646,16.441,29.898c0.497,0,0.996,0,1.494,0c0-9.966,0-19.933,0-29.898c7.472,0,14.947,0,22.42,0c0,21.425,0,42.857,0,64.281c-7.972,0-15.944,0-23.914,0c-3.208-12.156-12.907-19.408-16.441-31.394c-0.499,0-0.997,0-1.496,0c0,10.464,0,20.931,0,31.394c-7.473,0-14.947,0-22.42,0C76.34,329.198,76.34,307.766,76.34,286.341zM158.545,286.341c7.972,0,15.946,0,23.917,0c0,21.425,0,42.857,0,64.281c-7.971,0-15.945,0-23.917,0C158.545,329.198,158.545,307.766,158.545,286.341zM234.774,286.341c8.468,0,16.939,0,25.409,0c0,0.998,0,1.993,0,2.99c-8.647,11.726-13.866,32.996-19.429,46.342c-1.71,4.102-1.236,12.652-4.486,14.949c-7.472,0-14.947,0-22.419,0c-7.97-21.424-15.943-42.856-23.913-64.281c8.469,0,16.938,0,25.409,0c0,0.998,0,1.993,0,2.99c6.211,9.187,4.052,25.104,10.461,34.383C226.222,309.031,232.771,300.052,234.774,286.341zM269.149,286.341c14.447,0,28.898,0,43.346,0c0,5.481,0,10.962,0,16.445c-6.976,0-13.952,0-20.925,0c0,2.491,0,4.981,0,7.475c6.478,0,12.955,0,19.431,0c0,4.981,0,9.966,0,14.949c-4.674,1.612-12.576,1.591-19.431,1.494c0,1.993,0,3.985,0,5.979c6.974,0,13.949,0,20.925,0c0,5.979,0,11.96,0,17.938c-14.448,0-28.899,0-43.346,0C269.149,329.198,269.149,307.766,269.149,286.341zM325.948,286.341c18.695-0.29,36.46,1.044,49.323,4.486c1.585,2.853,3.698,6.672,5.979,8.968c0.473,17.595-3.645,17.665-11.958,25.415c6.38,6.334,12.309,17.229,16.441,25.412c-8.966,0-17.937,0-26.903,0c-2.015-8.106-6.709-12.889-8.968-20.93c-0.499,0-0.997,0-1.496,0c0,6.977,0,13.955,0,20.93c-7.47,0-14.945,0-22.417,0C325.948,329.198,325.948,307.766,325.948,286.341zM455.982,286.341c7.97,0,15.943,0,23.914,0c0,21.425,0,42.857,0,64.281c-7.971,0-15.944,0-23.914,0C455.982,329.198,455.982,307.766,455.982,286.341zM493.347,286.341c16.438,0,32.884,0,49.323,0c0,6.978,0,13.955,0,20.928c-4.482,0-8.97,0-13.452,0c0,14.45,0,28.905,0,43.354c-7.97,0-15.943,0-23.915,0c0-14.448,0-28.903,0-43.354c-3.985,0-7.972,0-11.956,0C493.347,300.296,493.347,293.318,493.347,286.341zM563.594,286.341c8.969,0,17.937,0,26.905,0c7.88,20.775,16.963,42.092,22.42,64.281c-8.469,0-16.942,0-25.409,0c-0.498-2.989-0.997-5.98-1.496-8.97c-5.48,0-10.961,0-16.44,0c-4.231,11.041-13.151,9.721-28.397,8.97c0-0.498,0-0.996,0-1.495C546.767,341.688,561.817,297.252,563.594,286.341zM614.413,286.341c16.44,0,32.884,0,49.323,0c0,6.978,0,13.955,0,20.928c-4.483,0-8.968,0-13.451,0c0,14.45,0,28.905,0,43.354c-7.972,0-15.944,0-23.913,0c0-14.448,0-28.903,0-43.354c-3.987,0-7.974,0-11.959,0C614.413,300.296,614.413,293.318,614.413,286.341zM675.694,286.341c14.447,0,28.898,0,43.345,0c0,5.481,0,10.962,0,16.445c-6.975,0-13.952,0-20.924,0c0,2.491,0,4.981,0,7.475c6.476,0,12.953,0,19.431,0c0,4.981,0,9.966,0,14.949c-4.676,1.612-12.578,1.591-19.431,1.494c0,1.993,0,3.985,0,5.979c6.972,0,13.949,0,20.924,0c0,0.996,0,1.993,0,2.989c0.396,1.041,0.122,9.572,0,14.949c-14.446,0-28.897,0-43.345,0C675.694,329.198,675.694,307.766,675.694,286.341zM769.855,350.622c-0.496-2.989-0.995-5.98-1.493-8.97c-5.48,0-10.961,0-16.441,0c-4.231,11.041-13.153,9.721-28.398,8.97c0-0.498,0-0.996,0-1.495c8.289-11.517,12.955-33.217,17.936-46.341c1.494-5.483,2.989-10.964,4.484-16.445c8.967,0,17.936,0,26.902,0c7.863,20.723,16.999,42.228,22.421,64.281C786.795,350.622,778.325,350.622,769.855,350.622zM348.365,302.786c0,3.985,0,7.973,0,11.957c2.989,0,5.979,0,8.969,0c0-0.995,0-1.991,0-2.988c2.093-3.349,0.815-4.896,0-8.969C354.345,302.786,351.354,302.786,348.365,302.786zM577.045,310.261c-1.494,5.479-2.986,10.962-4.482,16.443c2.988,0,5.979,0,8.968,0c0-0.996,0-1.993,0-2.99C579.275,320.397,579.359,313.639,577.045,310.261zM759.392,310.261c-1.493,5.479-2.989,10.962-4.482,16.443c2.989,0,5.979,0,8.968,0c0-0.996,0-1.993,0-2.99C761.621,320.397,761.708,313.639,759.392,310.261zM568.079,359.593c9.466,0,18.934,0,28.398,0c0,2.989,0,5.979,0,8.968c-9.465,0-18.933,0-28.398,0C568.079,365.571,568.079,362.582,568.079,359.593zM515.766,377.531c8.814-0.339,19.169-0.809,23.915,2.989c2.771,4.202,1.685,15.678,1.495,22.423c-0.498,0-0.997,0-1.495,0c-5.025-5.058-12.89-4.788-20.926-2.988c-3.62,7.406-4.753,11.448-1.495,19.434c4.837,2.839,6.512,4.339,14.948,4.484c2.499-2.421,4.937-3.437,8.968-4.484c0,7.475,0,14.948,0,22.423c-0.997,0-1.994,0-2.988,0c-5.125,4.349-20.112,4.095-25.41,0c-9.26-2.236-17.825-9.461-19.431-19.434c-6.366-8.454-0.714-21.373,1.493-29.898C501.28,388.34,509.525,382.694,515.766,377.531zM173.493,379.027c16.438,0,32.884,0,49.323,0c0,6.975,0,13.95,0,20.928c-4.483,0-8.968,0-13.452,0c0,14.448,0,28.902,0,43.353c-7.971,0-15.943,0-23.913,0c0-14.45,0-28.904,0-43.353c-3.986,0-7.973,0-11.958,0C173.493,392.978,173.493,386.002,173.493,379.027zM234.774,379.027c14.446,0,28.897,0,43.343,0c0,5.479,0,10.962,0,16.441c-6.974,0-13.95,0-20.924,0c0,2.491,0,4.983,0,7.475c6.476,0,12.953,0,19.428,0c0,4.983,0,9.968,0,14.949c-4.672,1.613-12.574,1.592-19.428,1.496c0,1.992,0,3.987,0,5.979c6.974,0,13.95,0,20.924,0c0,5.979,0,11.96,0,17.94c-14.446,0-28.897,0-43.343,0C234.774,421.881,234.774,400.451,234.774,379.027zM293.066,379.027c7.969,0,15.942,0,23.913,0c0,6.975,0,13.95,0,20.928c4.482,0,8.969,0,13.451,0c0-6.978,0-13.953,0-20.928c7.972,0,15.944,0,23.915,0c0,21.424,0,42.854,0,64.28c-7.971,0-15.943,0-23.915,0c0-7.475,0-14.951,0-22.423c-4.482,0-8.968,0-13.451,0c0,7.472,0,14.948,0,22.423c-7.971,0-15.944,0-23.913,0C293.066,421.881,293.066,400.451,293.066,379.027zM370.787,379.027c7.969,0,15.942,0,23.914,0c3.456,11.346,12.678,18.646,16.441,29.896c0.496,0,0.995,0,1.493,0c0-9.965,0-19.934,0-29.896c7.473,0,14.948,0,22.42,0c0,21.424,0,42.854,0,64.28c-7.971,0-15.943,0-23.913,0c-3.208-12.156-12.907-19.41-16.441-31.394c-0.499,0-0.997,0-1.496,0c0,10.463,0,20.93,0,31.394c-7.474,0-14.948,0-22.418,0C370.787,421.881,370.787,400.451,370.787,379.027zM451.498,379.027c7.971,0,15.943,0,23.913,0c0,21.424,0,42.854,0,64.28c-7.97,0-15.942,0-23.913,0C451.498,421.881,451.498,400.451,451.498,379.027zM593.489,443.308c-0.498-2.991-0.997-5.98-1.496-8.971c-5.479,0-10.961,0-16.441,0c-4.23,11.041-13.151,9.721-28.396,8.971c0-0.498,0-0.997,0-1.496c8.287-11.516,12.954-33.219,17.936-46.343c1.493-5.479,2.988-10.962,4.483-16.441c8.967,0,17.937,0,26.903,0c7.862,20.722,16.998,42.224,22.42,64.28C610.428,443.308,601.958,443.308,593.489,443.308zM583.025,402.943c-1.494,5.48-2.989,10.965-4.482,16.445c2.988,0,5.978,0,8.968,0c0-0.997,0-1.994,0-2.99C585.253,413.081,585.338,406.323,583.025,402.943zM275.129,471.71c6.776,0.718,10.758,2.951,16.441,4.484c1.882,3.283,3.259,4.567,4.485,8.971c-2.493,0-4.984,0-7.476,0c-4.163-4.35-8.872-4.729-17.935-4.484c-8.394,11.807-8.19,25.054,13.452,23.917c2.819-3.275,5.564-3.12,11.958-2.99c0,0.499,0,0.998,0,1.495c-1.203,1.527-0.532,0.411-1.496,2.99c-4.833,3.051-16.814,10.271-25.41,4.484c-10.308-2.936-13.886-10.018-13.452-23.918c4.539-4.656,8.799-8.915,13.452-13.453C272.628,472.912,273.374,472.917,275.129,471.71zM574.059,471.71c8.887,1.489,16.772,4.021,19.43,11.959c2.973,3.225,3.09,6.842,2.988,13.454c-2.092,2.5-2.344,6.353-4.484,8.97c-2.017,2.471-6.68,3.632-8.968,5.979c-5.487,0.211-13.265,0.652-16.441-1.494c-10.517-2.936-18.871-17.964-10.462-29.896c3.488-2.491,6.977-4.984,10.462-7.475C570.37,473.094,572.138,473.024,574.059,471.71zM623.38,471.71c6.776,0.718,10.76,2.951,16.442,4.484c1.883,3.283,3.257,4.567,4.484,8.971c-2.493,0-4.982,0-7.474,0c-4.164-4.35-8.874-4.729-17.937-4.484c-8.393,11.807-8.189,25.054,13.451,23.917c2.819-3.275,5.565-3.12,11.959-2.99c0,0.499,0,0.998,0,1.495c-1.202,1.527-0.532,0.411-1.495,2.99c-4.835,3.051-16.813,10.271-25.409,4.484c-10.309-2.936-13.886-10.018-13.451-23.918c4.535-4.656,8.797-8.915,13.451-13.453C620.882,472.912,621.625,472.917,623.38,471.71zM125.663,473.206c9.666-0.112,19.221,0.544,26.906,1.492c1.992,2.492,3.984,4.984,5.976,7.476c3.025,3.772,3.134,9.283,2.99,16.445c-3.354,4.015-4.471,7.486-8.966,10.463c-5.26,4.146-17.401,3.224-26.906,2.989C125.663,499.117,125.663,486.159,125.663,473.206zM171.999,473.206c2.988,0,5.979,0,8.967,0c0,12.953,0,25.911,0,38.865c-2.988,0-5.979,0-8.967,0C171.999,499.117,171.999,486.159,171.999,473.206zM191.428,473.206c2.989,0,5.978,0,8.968,0c4.292,8.69,11.81,14.565,14.947,23.917c0.499,0,0.998,0,1.494,0c0-7.972,0-15.946,0-23.917c2.491,0,4.984,0,7.475,0c0,12.953,0,25.911,0,38.865c-2.491,0-4.984,0-7.475,0c-4.668-7.979-11.884-14.672-14.945-23.916c-0.499,0-0.997,0-1.496,0c0,7.971,0,15.945,0,23.916c-2.99,0-5.979,0-8.968,0C191.428,499.117,191.428,486.159,191.428,473.206zM308.011,473.206c2.989,0,5.979,0,8.968,0c0,10.462,0,20.93,0,31.392c3.985,0,7.971,0,11.958,0c0.832,2.398,1.195,3.594,1.493,7.474c-7.472,0-14.947,0-22.418,0C308.011,499.117,308.011,486.159,308.011,473.206zM337.903,473.206c2.99,0,5.979,0,8.969,0c0,9.963,0,19.933,0,29.896c2.577,0.897,4.712,1.332,8.968,1.495c1.016-8.889,1.508-20.427,1.495-31.392c2.491,0,4.984,0,7.474,0c0,10.96,0,21.925,0,32.887c-6.146,4.115-7.788,6.139-19.431,5.979c-1.527-1.2-0.41-0.53-2.988-1.494C337.421,501.969,337.703,487.807,337.903,473.206zM388.723,473.206c2.491,0,4.981,0,7.472,0c0,11.458,0,22.921,0,34.383c-5.07,3.199-7.001,4.565-16.441,4.482c-1.525-1.2-0.41-0.53-2.99-1.494c-1.829-3.408-2.447-3.364-2.988-8.97c7.3,0.32,7.437,1.878,13.452,2.99c0-0.996,0-1.992,0-2.99C390.637,496.385,388.917,481.205,388.723,473.206zM432.066,473.206c2.989,0,5.979,0,8.969,0c4.316,8.724,11.765,14.374,14.947,23.917c0.497,0,0.995,0,1.494,0c0-7.972,0-15.946,0-23.917c2.491,0,4.981,0,7.472,0c0.007,13.512,0.568,29.628,0,38.865c-2.49,0-4.98,0-7.472,0c-4.668-7.979-11.884-14.672-14.948-23.916c-0.496,0-0.994,0-1.493,0c0,7.971,0,15.945,0,23.916c-2.989,0-5.979,0-8.969,0C432.066,499.117,432.066,486.159,432.066,473.206zM500.819,503.103c-4.981,0-9.964,0-14.945,0c-2.627,6.203-2.863,8.686-11.956,8.969c1.057-10.339,11.79-38.239,22.419-38.865c5.479,12.953,10.961,25.911,16.441,38.865c-2.99,0-5.979,0-8.969,0c-0.499-1.494-0.998-2.989-1.494-4.482C501.19,505.984,501.416,506.175,500.819,503.103zM518.755,473.206c8.056-0.135,16.432,0.271,22.421,1.492c3.986,7.583,6.494,13.912-1.495,19.436c-3.093,2.487-6.211,2.856-11.956,2.989c0,4.983,0,9.967,0,14.948c-2.989,0-5.98,0-8.97,0C518.755,499.117,518.755,486.159,518.755,473.206zM678.684,503.103c-4.982,0-9.966,0-14.948,0c-2.626,6.203-2.863,8.686-11.957,8.969c1.058-10.339,11.79-38.239,22.419-38.865c5.481,12.953,10.963,25.911,16.441,38.865c-2.989,0-5.979,0-8.968,0c-0.496-1.494-0.996-2.989-1.495-4.482C679.053,505.984,679.278,506.175,678.684,503.103zM134.631,479.185c0,8.968,0,17.939,0,26.908c7.021,0.024,10.4-1.093,14.948-2.99c3.298-6.648,4.752-16.016-1.496-20.929C144.757,479.496,140.915,479.188,134.631,479.185zM527.725,479.185c0,3.986,0,7.973,0,11.959c2.488-0.499,4.981-0.996,7.472-1.496c0.942-2.621,0.288-1.449,1.495-2.988c-0.943-2.623-0.289-1.453-1.495-2.99c-1.935-3.688,0.641-1.018-2.988-2.988C530.604,479.556,530.794,479.78,527.725,479.185zM568.079,480.681c-1.615,2.627-3.76,5.407-5.979,7.475c-0.32,14.121,5.071,17.116,19.431,16.442C589.922,492.79,589.721,479.544,568.079,480.681zM491.851,485.165c-1.493,3.984-2.988,7.974-4.482,11.958c3.487,0,6.976,0,10.461,0c0-0.496,0-0.996,0-1.494C495.417,492.531,494.532,487.966,491.851,485.165zM669.715,485.165c-1.496,3.984-2.989,7.974-4.484,11.958c3.487,0,6.975,0,10.463,0c0-0.496,0-0.996,0-1.494C673.279,492.531,672.396,487.966,669.715,485.165zM406.657,494.134c5.48,0,10.963,0,16.44,0c0,1.993,0,3.986,0,5.98c-5.478,0-10.96,0-16.44,0C406.657,498.12,406.657,496.127,406.657,494.134z" />
      </svg>
    );
  }

  return (
    <svg className="UtcnLogo" viewBox="0 0 276.792 228.041" fill={fillColor}>
      <path d="M0.002,0.813c30.388,0,60.785,0,91.172,0c11.477,0,29.103-2.153,35.874,2.991 c7.901,9.266,2.988,44.385,2.988,59.797c0,54.807,0,109.631,0,164.438c-17.461,0.143-29.609-5.548-43.346-8.968 c-5.032-15.261-1.493-41.625-1.493-59.796c0-42.851,0-85.712,0-128.563c-1.571-2.149-2.33-5.863-2.989-8.968 c-2.99-2.491-5.979-4.983-8.97-7.475c-24.41,0-48.826,0-73.236,0C0.002,9.783,0.002,5.298,0.002,0.813zM276.509,0.813 c0,4.486,0,8.971,0,13.456c-24.412-0.167-54.453-2.752-76.225,1.494c-10.099,16.072-7.474,39.633-7.474,65.777 c0,45.34,0,90.696,0,136.036c-14.722,3.634-27.02,9.969-46.335,10.463c0-48.329,0-96.674,0-145.004 c0-24.982-2.779-55.389,1.495-77.736c2.64-1.437,2.513-1.879,5.979-2.99c6.544-4.093,24.858-1.496,34.375-1.496 C217.718,0.813,247.12,0.813,276.509,0.813zM0.002,29.217c18.553-0.445,55.709-4.622,64.268,5.979 c6.416,8.509,2.991,34.017,2.991,47.838c0,41.353,0,82.721,0,124.077c-0.996,0-1.992,0-2.991,0 c-11.166-11.319-27.757-16.971-37.365-29.898C-1.004,139.662,0.016,95.054,0.002,29.217zM276.509,29.217 c1.121,76.625,0.749,119.057-37.364,156.964c-8.106,8.063-17.27,17.646-29.893,20.93c0-55.307,0-110.629,0-165.935 c1.651-2.069,2.231-4.295,2.989-7.475C227.084,26.937,254.903,29.095,276.509,29.217z" />
    </svg>
  );
};

UtcnLogo.propTypes = {
  fillColor: PropTypes.string.isRequired,
  includeText: PropTypes.bool.isRequired,
};

UtcnLogo.defaultProps = {
  fillColor: "#ffffff",
  includeText: false,
};

export default UtcnLogo;
