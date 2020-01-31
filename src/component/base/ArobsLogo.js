import React from "react";
import PropTypes from "prop-types";

import "./ArobsLogo.css";

const ArobsLogo = ({ fillColor, includeText }) => {
  if (includeText) {
    return (
      <svg className="ArobsLogo" viewBox="0 0 225.199 58.127" fill={fillColor}>
        <path d="M82.012,23.985H71.994l5.009-8.906L82.012,23.985zM92.566,32.801L80.469,11.09h-6.836l-12.129,21.71h5.607l2.615-4.678h14.618l2.615,4.678H92.566z" />
        <path d="M101.513,20.986v-5.757h12.507c1.197,0,2.121,0.258,2.772,0.772c0.651,0.516,0.977,1.197,0.977,2.046c0,0.909-0.32,1.626-0.961,2.151c-0.641,0.525-1.56,0.788-2.757,0.788H101.513zM123.85,32.801l-5.796-8.063c3.465-0.9,5.198-3.08,5.198-6.539c0-1.06-0.205-2.025-0.615-2.895c-0.409-0.87-0.987-1.62-1.732-2.25c-0.746-0.629-1.649-1.115-2.709-1.455c-1.061-0.34-2.242-0.51-3.544-0.51H95.969v21.71h5.544v-7.677h10.491l5.607,7.677H123.85z" />
        <path d="M152.613,24.915c-0.462,0.899-1.118,1.669-1.969,2.309c-0.851,0.64-1.88,1.135-3.087,1.484c-1.208,0.35-2.568,0.525-4.08,0.525s-2.867-0.175-4.064-0.525c-1.197-0.349-2.221-0.844-3.071-1.484c-0.851-0.64-1.502-1.409-1.954-2.309c-0.452-0.9-0.677-1.899-0.677-2.999c0-1.08,0.231-2.064,0.693-2.954c0.462-0.889,1.119-1.654,1.969-2.294s1.879-1.14,3.087-1.5c1.208-0.36,2.557-0.54,4.048-0.54c1.491,0,2.84,0.18,4.048,0.54c1.208,0.36,2.237,0.86,3.087,1.5s1.507,1.405,1.969,2.294c0.462,0.89,0.693,1.874,0.693,2.954C153.306,23.015,153.075,24.015,152.613,24.915zM155.07,14.029c-1.449-1.139-3.166-2.024-5.151-2.654s-4.122-0.944-6.411-0.944c-2.29,0-4.426,0.314-6.411,0.944s-3.702,1.515-5.151,2.654c-1.303,1.02-2.284,2.194-2.946,3.523c-0.662,1.33-0.992,2.784-0.992,4.363c0,1.6,0.325,3.069,0.977,4.408c0.651,1.339,1.627,2.519,2.93,3.539c1.428,1.14,3.129,2.02,5.104,2.639c1.974,0.62,4.127,0.93,6.458,0.93c2.352,0,4.51-0.31,6.474-0.93c1.964-0.619,3.67-1.499,5.12-2.639c2.625-2.079,3.938-4.728,3.938-7.947C159.008,18.737,157.695,16.108,155.07,14.029L155.07,14.029z" />
        <path d="M170.728,28.663v-4.948h13.987c1.05,0,1.869,0.242,2.458,0.725c0.588,0.482,0.882,1.106,0.882,1.87c0,0.744-0.289,1.322-0.867,1.735c-0.578,0.412-1.433,0.618-2.567,0.618H170.728zM170.728,19.577v-4.348H184.4c0.735,0,1.333,0.198,1.796,0.593c0.462,0.395,0.693,0.907,0.693,1.535c0,0.648-0.226,1.181-0.677,1.597c-0.452,0.416-0.982,0.623-1.591,0.623H170.728zM191.93,19.725c0.378-0.67,0.567-1.456,0.567-2.358c0-1.381-0.515-2.612-1.543-3.694c-0.756-0.801-1.707-1.432-2.852-1.892c-1.145-0.46-2.368-0.69-3.67-0.69h-19.249v21.71h19.879c1.344,0,2.546-0.154,3.607-0.464c1.06-0.309,1.963-0.743,2.709-1.302c0.745-0.559,1.317-1.218,1.717-1.977c0.399-0.758,0.599-1.587,0.599-2.485c0-1.138-0.305-2.111-0.914-2.92c-0.609-0.809-1.481-1.512-2.615-2.111C190.964,21.001,191.552,20.396,191.93,19.725z" />
        <path d="M224.379,13.729c-3.382-2.119-7.855-3.179-13.421-3.179c-4.159,0-7.32,0.625-9.483,1.875s-3.245,2.944-3.245,5.083c0,1.08,0.272,2.004,0.819,2.774c0.546,0.77,1.371,1.41,2.473,1.919c1.103,0.51,2.483,0.9,4.143,1.17c1.659,0.27,3.602,0.445,5.828,0.524c1.218,0.06,2.31,0.11,3.276,0.15c0.966,0.04,1.785,0.13,2.458,0.27c0.672,0.14,1.186,0.34,1.543,0.6c0.357,0.26,0.536,0.629,0.536,1.109c0,0.899-0.62,1.629-1.859,2.189c-1.239,0.56-3.014,0.84-5.324,0.84c-2.142,0-4.19-0.275-6.143-0.825s-3.917-1.395-5.892-2.534l-3.024,3.539c2.185,1.439,4.484,2.479,6.899,3.119s5.051,0.959,7.908,0.959c4.368,0,7.682-0.66,9.94-1.979c2.257-1.319,3.387-3.158,3.387-5.518c0-1.06-0.216-1.969-0.646-2.729c-0.431-0.759-1.087-1.394-1.969-1.904c-0.882-0.51-1.984-0.915-3.308-1.215s-2.878-0.529-4.663-0.689c-0.882-0.08-1.728-0.135-2.536-0.165c-0.809-0.03-1.575-0.06-2.3-0.09c-0.725-0.03-1.402-0.075-2.032-0.135c-0.63-0.06-1.218-0.15-1.764-0.27c-1.323-0.3-1.985-0.82-1.985-1.56c0-0.7,0.604-1.254,1.812-1.664c1.208-0.41,3.009-0.615,5.403-0.615c1.785,0,3.497,0.195,5.135,0.584c1.638,0.39,3.266,1.005,4.883,1.844L224.379,13.729z" />
        <path d="M62.284,38.094h2.962l-0.018,10.892l-0.073,0.515h2.089c-0.061-0.091-0.091-0.263-0.091-0.515V38.077h2.943l0.799,0.068v-1.012h-9.394v1.012L62.284,38.094z" />
        <path d="M71.951,49.501c-0.061-0.114-0.091-0.286-0.091-0.515V43.24c0-0.675,0.197-1.207,0.59-1.595s0.936-0.583,1.626-0.583l0.327,0.017v-1.355c-0.703,0-1.257,0.123-1.662,0.369c-0.406,0.246-0.712,0.644-0.917,1.192v-1.39l-1.781,0.018c0.048,0.126,0.073,0.297,0.073,0.515v8.559l-0.073,0.515H71.951z" />
        <path d="M76.929,41.01c0.569-0.251,1.108-0.377,1.617-0.377c0.545,0,0.993,0.135,1.344,0.403c0.351,0.269,0.527,0.609,0.527,1.021c0,0.377-0.106,0.672-0.318,0.883c-0.212,0.212-0.566,0.386-1.063,0.523l-1.762,0.48c-1.878,0.526-2.816,1.544-2.816,3.053c0,0.778,0.27,1.427,0.809,1.947c0.539,0.521,1.214,0.781,2.026,0.781c0.92,0,1.792-0.326,2.616-0.978c0.146-0.125,0.248-0.223,0.309-0.292c0.061-0.069,0.151-0.177,0.272-0.326V48.3l-0.018,0.12c0,0.332,0.157,0.629,0.473,0.892c0.314,0.263,0.678,0.395,1.09,0.395c0.46,0,0.938-0.166,1.436-0.497v-0.978c-0.267,0.217-0.509,0.326-0.727,0.326c-0.388,0-0.581-0.383-0.581-1.149v-5.249c0-0.617-0.103-1.069-0.309-1.355c-0.582-0.731-1.52-1.098-2.816-1.098c-0.981,0-1.932,0.183-2.853,0.549l-0.69,0.292l0.345,1.149C76.239,41.388,76.602,41.159,76.929,41.01L76.929,41.01zM79.709,47.854c-0.484,0.48-1.054,0.721-1.708,0.721c-0.533,0-0.966-0.174-1.299-0.523c-0.333-0.349-0.5-0.781-0.5-1.295c0-0.549,0.155-0.989,0.463-1.321c0.309-0.332,0.82-0.617,1.536-0.857l1.671-0.618c0.169-0.068,0.357-0.177,0.563-0.326v2.436C80.436,46.779,80.193,47.374,79.709,47.854z" />
        <path d="M86.522,49.501c-0.073-0.137-0.109-0.309-0.109-0.515v-5.849c0-0.629,0.239-1.158,0.718-1.587c0.478-0.429,1.081-0.643,1.808-0.643c1.393,0,2.09,0.624,2.09,1.87v6.209c0,0.24-0.019,0.412-0.055,0.515h1.908c-0.048-0.137-0.073-0.309-0.073-0.515v-6.57c0-0.812-0.293-1.466-0.881-1.964c-0.588-0.498-1.36-0.746-2.317-0.746c-1.163,0-2.096,0.349-2.798,1.046c-0.122,0.137-0.209,0.246-0.264,0.326c-0.055,0.08-0.106,0.166-0.154,0.257v-1.441l-1.799,0.018c0.048,0.126,0.073,0.297,0.073,0.515v8.559l-0.073,0.515H86.522z" />
        <path d="M95.734,49.449c0.642,0.172,1.266,0.257,1.871,0.257c1.151,0,2.071-0.274,2.762-0.823c0.69-0.549,1.036-1.287,1.036-2.213c0-0.663-0.215-1.212-0.645-1.646c-0.43-0.435-1.181-0.849-2.253-1.244c-1.072-0.395-1.711-0.74-1.917-1.038c-0.134-0.194-0.2-0.412-0.2-0.652c0-0.457,0.185-0.832,0.554-1.124s0.845-0.438,1.426-0.438c0.484,0,0.963,0.098,1.436,0.292c0.327,0.137,0.678,0.343,1.054,0.618l0.291-1.098c-1.03-0.435-2.023-0.652-2.98-0.652c-1.03,0-1.872,0.263-2.525,0.789c-0.654,0.526-0.981,1.178-0.981,1.956c0,0.903,0.357,1.578,1.072,2.024c0.193,0.126,0.424,0.251,0.69,0.377c0.266,0.126,0.527,0.234,0.781,0.326c1.005,0.377,1.668,0.698,1.99,0.96c0.321,0.263,0.481,0.601,0.481,1.012c0,0.503-0.194,0.912-0.581,1.227c-0.388,0.314-0.878,0.472-1.472,0.472c-0.521,0-1.072-0.114-1.653-0.343c-0.352-0.137-0.775-0.412-1.272-0.823l-0.327,1.218C94.917,49.158,95.371,49.347,95.734,49.449L95.734,49.449z" />
        <path d="M104.038,38.935c0.823,0,1.235-0.246,1.235-0.737c0-0.515-0.345-0.772-1.036-0.772c-0.812,0-1.217,0.257-1.217,0.772C103.02,38.689,103.359,38.935,104.038,38.935L104.038,38.935zM103.274,40.427v8.559l-0.073,0.515h1.908c-0.048-0.091-0.073-0.263-0.073-0.515v-8.559c0-0.229,0.03-0.4,0.091-0.515h-1.926C103.25,40.039,103.274,40.21,103.274,40.427L103.274,40.427z" />
        <path d="M107.453,37.065v11.921l-0.073,0.515h1.926c-0.061-0.114-0.091-0.286-0.091-0.515V37.065c0-0.148,0.006-0.251,0.018-0.309c0.012-0.057,0.036-0.131,0.073-0.223h-1.926C107.429,36.636,107.453,36.813,107.453,37.065L107.453,37.065z" />
        <path d="M110.324,40.427l3.325,8.559c0.084,0.206,0.127,0.349,0.127,0.429v0.086l1.436-0.052l0.127-0.463l3.416-8.559c0.061-0.126,0.115-0.232,0.164-0.318c0.048-0.085,0.097-0.151,0.146-0.197h-1.072v0.085c-0.024,0.195-0.054,0.337-0.091,0.429l-2.907,7.187l-2.798-7.187l-0.091-0.429v-0.103h-2.053L110.324,40.427z" />
        <path d="M121.662,41.01c0.569-0.251,1.108-0.377,1.617-0.377c0.545,0,0.993,0.135,1.344,0.403s0.527,0.609,0.527,1.021c0,0.377-0.106,0.672-0.318,0.883c-0.212,0.212-0.566,0.386-1.063,0.523l-1.762,0.48c-1.878,0.526-2.816,1.544-2.816,3.053c0,0.778,0.27,1.427,0.809,1.947c0.539,0.521,1.214,0.781,2.026,0.781c0.92,0,1.792-0.326,2.617-0.978c0.145-0.125,0.248-0.223,0.309-0.292s0.151-0.177,0.272-0.326V48.3l-0.018,0.12c0,0.332,0.157,0.629,0.472,0.892c0.315,0.263,0.679,0.395,1.09,0.395c0.46,0,0.938-0.166,1.436-0.497v-0.978c-0.267,0.217-0.509,0.326-0.727,0.326c-0.388,0-0.581-0.383-0.581-1.149v-5.249c0-0.617-0.103-1.069-0.309-1.355c-0.582-0.731-1.521-1.098-2.816-1.098c-0.981,0-1.932,0.183-2.853,0.549l-0.69,0.292l0.345,1.149C120.971,41.388,121.334,41.159,121.662,41.01L121.662,41.01zM124.441,47.854c-0.484,0.48-1.054,0.721-1.708,0.721c-0.533,0-0.966-0.174-1.299-0.523c-0.333-0.349-0.5-0.781-0.5-1.295c0-0.549,0.155-0.989,0.463-1.321c0.309-0.332,0.821-0.617,1.536-0.857l1.671-0.618c0.169-0.068,0.357-0.177,0.563-0.326v2.436C125.168,46.779,124.926,47.374,124.441,47.854z" />
        <path d="M131.255,49.501c-0.073-0.137-0.109-0.309-0.109-0.515v-5.849c0-0.629,0.239-1.158,0.718-1.587c0.479-0.429,1.081-0.643,1.808-0.643c1.393,0,2.09,0.624,2.09,1.87v6.209c0,0.24-0.019,0.412-0.055,0.515h1.908c-0.048-0.137-0.073-0.309-0.073-0.515v-6.57c0-0.812-0.294-1.466-0.881-1.964s-1.359-0.746-2.316-0.746c-1.163,0-2.096,0.349-2.798,1.046c-0.122,0.137-0.209,0.246-0.264,0.326c-0.055,0.08-0.106,0.166-0.154,0.257v-1.441l-1.799,0.018c0.048,0.126,0.073,0.297,0.073,0.515v8.559l-0.073,0.515H131.255z" />
        <path d="M140.739,38.935c0.824,0,1.235-0.246,1.235-0.737c0-0.515-0.345-0.772-1.036-0.772c-0.812,0-1.217,0.257-1.217,0.772C139.722,38.689,140.061,38.935,140.739,38.935L140.739,38.935zM139.976,40.427v8.559l-0.073,0.515h1.908c-0.048-0.091-0.072-0.263-0.072-0.515v-8.559c0-0.229,0.03-0.4,0.091-0.515h-1.926C139.952,40.039,139.976,40.21,139.976,40.427L139.976,40.427z" />
        <path d="M145.917,41.01c0.569-0.251,1.108-0.377,1.617-0.377c0.545,0,0.993,0.135,1.344,0.403c0.352,0.269,0.527,0.609,0.527,1.021c0,0.377-0.106,0.672-0.318,0.883c-0.212,0.212-0.566,0.386-1.063,0.523l-1.763,0.48c-1.878,0.526-2.816,1.544-2.816,3.053c0,0.778,0.27,1.427,0.809,1.947c0.539,0.521,1.214,0.781,2.026,0.781c0.92,0,1.792-0.326,2.617-0.978c0.145-0.125,0.248-0.223,0.309-0.292s0.151-0.177,0.272-0.326V48.3l-0.018,0.12c0,0.332,0.157,0.629,0.473,0.892c0.314,0.263,0.678,0.395,1.09,0.395c0.46,0,0.939-0.166,1.436-0.497v-0.978c-0.267,0.217-0.509,0.326-0.727,0.326c-0.388,0-0.582-0.383-0.582-1.149v-5.249c0-0.617-0.103-1.069-0.309-1.355c-0.582-0.731-1.52-1.098-2.816-1.098c-0.981,0-1.933,0.183-2.853,0.549l-0.69,0.292l0.345,1.149C145.227,41.388,145.59,41.159,145.917,41.01L145.917,41.01zM148.697,47.854c-0.484,0.48-1.054,0.721-1.708,0.721c-0.533,0-0.966-0.174-1.299-0.523c-0.333-0.349-0.5-0.781-0.5-1.295c0-0.549,0.154-0.989,0.463-1.321c0.309-0.332,0.821-0.617,1.536-0.857l1.671-0.618c0.169-0.068,0.357-0.177,0.563-0.326v2.436C149.424,46.779,149.182,47.374,148.697,47.854z" />
        <path d="M158.899,49.124c0.248,0.103,0.463,0.177,0.645,0.223c0.727,0.217,1.441,0.326,2.144,0.326c1.284,0,2.332-0.343,3.143-1.029c0.812-0.686,1.218-1.566,1.218-2.641c0-1.27-0.563-2.241-1.69-2.916c-0.521-0.309-1.048-0.583-1.581-0.824c-1.127-0.503-1.86-0.909-2.199-1.218c-0.352-0.343-0.527-0.777-0.527-1.304c0-0.537,0.215-0.989,0.645-1.355c0.43-0.366,0.96-0.549,1.59-0.549c0.4,0,0.769,0.046,1.108,0.137c0.339,0.092,0.684,0.229,1.036,0.412l0.254,0.154l0.345,0.223l0.399-1.184c-0.254-0.114-0.487-0.208-0.699-0.283c-0.212-0.074-0.397-0.128-0.554-0.163c-0.582-0.137-1.157-0.206-1.726-0.206c-1.235,0-2.25,0.314-3.043,0.943c-0.793,0.629-1.19,1.43-1.19,2.401c0,1.075,0.521,1.938,1.563,2.59c0.509,0.309,1.023,0.589,1.544,0.84c1.429,0.675,2.271,1.189,2.525,1.544s0.381,0.761,0.381,1.218c0,0.641-0.248,1.175-0.745,1.604c-0.497,0.429-1.108,0.643-1.835,0.643c-0.581,0-1.181-0.137-1.798-0.412c-0.4-0.183-0.842-0.486-1.327-0.909l-0.4,1.355C158.394,48.895,158.651,49.021,158.899,49.124z" />
        <path d="M168.547,48.309c0.842,0.909,1.965,1.364,3.371,1.364c1.405,0,2.531-0.452,3.379-1.355c0.848-0.903,1.272-2.076,1.272-3.517c0-1.589-0.415-2.835-1.245-3.739c-0.83-0.903-1.966-1.355-3.407-1.355c-1.405,0-2.529,0.455-3.371,1.364c-0.842,0.909-1.263,2.113-1.263,3.611C167.285,46.19,167.705,47.399,168.547,48.309zM173.935,41.567c0.497,0.761,0.745,1.799,0.745,3.114c0,1.303-0.246,2.341-0.736,3.113c-0.491,0.771-1.154,1.158-1.99,1.158c-0.86,0-1.542-0.377-2.044-1.132c-0.503-0.754-0.754-1.801-0.754-3.139c0-1.304,0.251-2.339,0.754-3.105c0.502-0.766,1.166-1.149,1.989-1.149C172.76,40.427,173.438,40.807,173.935,41.567z" />
        <path d="M178.568,40.736v8.25l-0.073,0.515h1.926c-0.048-0.126-0.073-0.297-0.073-0.515v-8.25h3.071v-0.823h-3.071v-1.321c0-0.926,0.515-1.39,1.544-1.39c0.569,0,1.126,0.137,1.672,0.412l0.363-0.978c-0.824-0.24-1.581-0.36-2.271-0.36c-2.059,0-3.088,0.744-3.088,2.23v1.389h-1.108v0.841H178.568z" />
        <path d="M183.437,40.719v7.221c0,1.109,0.575,1.664,1.726,1.664c0.521,0,1.09-0.114,1.708-0.343v-0.926c-0.315,0.195-0.618,0.292-0.909,0.292c-0.533,0-0.799-0.309-0.799-0.926v-6.981h1.726v-0.824h-1.726V38.3c0-0.229,0.036-0.412,0.109-0.549l-1.854,0.189v1.955h-1.581v0.824H183.437z" />
        <path d="M186.889,40.118c0.024,0.046,0.061,0.149,0.109,0.309l2.653,8.559c0.036,0.092,0.057,0.166,0.063,0.223c0.006,0.057,0.015,0.109,0.027,0.154l-0.018,0.137l1.508-0.052l0.127-0.463l2.562-7.41l2.362,7.41l0.109,0.36v0.068l-0.018,0.086h1.544v-0.086l0.091-0.429l2.816-8.559c0.097-0.263,0.182-0.435,0.254-0.515h-1.054c0.024,0.023,0.036,0.074,0.036,0.154l-0.091,0.36l-2.326,6.947l-2.217-6.947l-0.109-0.395l0.018-0.069v-0.069h-1.799v0.103l-0.109,0.429l-2.435,6.947l-2.181-6.947c-0.048-0.137-0.073-0.263-0.073-0.377l0.018-0.155h-1.999C186.786,39.941,186.829,40.015,186.889,40.118L186.889,40.118z" />
        <path d="M203.787,41.01c0.569-0.251,1.108-0.377,1.617-0.377c0.545,0,0.993,0.135,1.344,0.403c0.352,0.269,0.527,0.609,0.527,1.021c0,0.377-0.106,0.672-0.318,0.883c-0.212,0.212-0.566,0.386-1.063,0.523l-1.763,0.48c-1.877,0.526-2.816,1.544-2.816,3.053c0,0.778,0.27,1.427,0.809,1.947c0.539,0.521,1.214,0.781,2.026,0.781c0.92,0,1.792-0.326,2.617-0.978c0.146-0.125,0.248-0.223,0.309-0.292s0.151-0.177,0.272-0.326V48.3l-0.018,0.12c0,0.332,0.157,0.629,0.473,0.892c0.315,0.263,0.678,0.395,1.09,0.395c0.46,0,0.939-0.166,1.436-0.497v-0.978c-0.267,0.217-0.509,0.326-0.727,0.326c-0.388,0-0.582-0.383-0.582-1.149v-5.249c0-0.617-0.103-1.069-0.309-1.355c-0.581-0.731-1.52-1.098-2.816-1.098c-0.981,0-1.933,0.183-2.853,0.549l-0.69,0.292l0.345,1.149C203.096,41.388,203.459,41.159,203.787,41.01L203.787,41.01zM206.566,47.854c-0.484,0.48-1.054,0.721-1.708,0.721c-0.533,0-0.966-0.174-1.299-0.523c-0.333-0.349-0.5-0.781-0.5-1.295c0-0.549,0.154-0.989,0.463-1.321c0.309-0.332,0.821-0.617,1.536-0.857l1.671-0.618c0.17-0.068,0.357-0.177,0.563-0.326v2.436C207.293,46.779,207.051,47.374,206.566,47.854z" />
        <path d="M213.362,49.501c-0.061-0.114-0.091-0.286-0.091-0.515V43.24c0-0.675,0.197-1.207,0.591-1.595c0.393-0.389,0.936-0.583,1.626-0.583l0.327,0.017v-1.355c-0.703,0-1.257,0.123-1.663,0.369c-0.406,0.246-0.712,0.644-0.917,1.192v-1.39l-1.781,0.018c0.048,0.126,0.073,0.297,0.073,0.515v8.559l-0.073,0.515H213.362z" />
        <path d="M223.909,40.941c-0.793-0.834-1.85-1.252-3.17-1.252c-1.417,0-2.543,0.458-3.379,1.372c-0.836,0.915-1.254,2.133-1.254,3.654c0,1.601,0.439,2.833,1.317,3.696c0.878,0.864,2.117,1.295,3.716,1.295c0.545,0,1.054-0.045,1.526-0.137c0.473-0.091,0.933-0.223,1.381-0.395l0.581-0.274l-0.309-1.132c-0.364,0.297-0.727,0.526-1.09,0.686c-0.569,0.263-1.193,0.395-1.872,0.395c-1.102,0-1.953-0.354-2.553-1.063s-0.899-1.727-0.899-3.053l0.018-0.154v-0.257h7.177C225.1,42.903,224.703,41.776,223.909,40.941zM222.465,41.319c0.23,0.286,0.412,0.618,0.545,0.995s0.2,0.795,0.2,1.252h-5.233c0.109-0.949,0.406-1.695,0.89-2.238s1.096-0.815,1.835-0.815C221.441,40.513,222.029,40.782,222.465,41.319L222.465,41.319z" />
        <path d="M28.887,0.008c8.161-0.165,13.057,2.137,17.637,5.47c0.775,0.564,1.378,1.406,2.1,2.02c1.419,1.207,3.76,3.491,4.283,5.47c-0.028,0-0.056,0-0.084,0c-0.611-0.912-1.615-1.575-2.268-2.44C47.57,6.57,42.26,4.136,36.697,2.701c-3.512-0.905-9.03-0.392-12.01,0.589c-7.903,2.601-13.698,7.63-16.125,15.737c-0.895,2.988-1.276,7.957-0.336,11.277c1.988,7.018,6.242,11.323,13.27,13.296c2.462,0.691,6.316,0.407,8.398-0.337c0.682-0.243,1.222-0.239,1.848-0.505c4.068-1.725,6.628-4.517,8.314-8.667c0.904-2.225,1.493-6.243,0.588-9.005c-0.555-1.692-1.268-3.421-2.184-4.797c-0.566-0.85-1.451-1.516-2.016-2.356c0.056,0,0.112,0,0.168,0c0.308,0.295,0.711,0.351,1.092,0.589c0.557,0.348,1.063,0.858,1.596,1.262c0.458,0.348,0.828,0.966,1.176,1.431c0.283,0.378,0.733,0.703,1.008,1.094c1.106,1.574,2.032,3.375,2.688,5.386c1.338,4.102,0.184,9.333-1.176,12.455c-2.765,6.348-7.471,9.47-14.613,11.445c-2.382,0.659-6.563,0.977-9.238,0.252c-3.404-0.921-5.902-2.285-8.482-3.955c-0.791-0.512-1.438-1.371-2.184-1.936c-3.246-2.459-5.487-6.302-7.139-10.351c-0.357-0.876-0.39-1.744-0.672-2.693c-0.637-2.146-0.951-6.483-0.336-9.005c0.414-1.696,0.638-3.422,1.26-4.965c2.321-5.76,5.833-10.32,10.666-13.549c2.796-1.869,6.108-3.204,9.658-4.292c1.607-0.493,3.345-0.536,5.039-0.926C27.534,0.043,28.432,0.294,28.887,0.008zM31.91,5.899c3.007-0.06,5.7,0.106,7.895,0.925c7.651,2.856,13.261,8.79,15.873,16.747c1.18,3.593,1.469,9.722,0.168,13.549c-1.198,3.522-2.613,6.644-4.619,9.341c-3.185,4.281-7.907,7.325-13.186,9.509c-1.77,0.732-3.533,0.877-5.543,1.431c-3.593,0.99-9.349,0.97-12.85-0.084c-3.243-0.976-5.722-2.396-8.23-4.04c-0.14-0.028-0.28-0.056-0.42-0.084c-0.66-0.517-1.262-1.26-1.932-1.768c-1.708-1.294-3.048-2.94-4.283-4.712c-0.406-0.583-0.97-1.161-1.176-1.936c0.028,0,0.056,0,0.084,0c0.71,1.16,1.907,2.163,2.855,3.114c2.039,2.042,4.298,4.085,7.055,5.386c1.744,0.823,3.617,1.32,5.543,1.936c0.616,0.084,1.232,0.168,1.848,0.252c3.691,0.882,8.496,0.134,11.422-0.841c6.716-2.239,11.742-6.328,14.781-12.203c0.635-1.228,0.709-2.52,1.176-3.955c0.909-2.793,1.016-7.861,0.168-10.856c-1.904-6.722-6.142-11.141-12.85-13.044c-0.947-0.269-1.797-0.11-2.855-0.337c-1.566-0.335-3.703-0.004-4.955,0.337c-3.95,1.075-6.466,2.423-8.818,5.049c-1.014,1.132-1.522,2.538-2.184,4.039c-0.966,2.193-1.771,6.401-0.756,9.257c0.676,1.9,1.369,3.707,2.436,5.217c0.485,0.687,1.212,1.239,1.68,1.936c-0.056,0-0.112,0-0.168,0c-0.26-0.315-0.744-0.357-1.092-0.589c-0.419-0.279-0.854-0.681-1.26-1.01c-1.501-1.217-3.208-3.67-4.115-5.47c-0.628-1.246-0.988-2.766-1.344-4.208c-0.622-2.523-0.084-6.097,0.588-7.995c0.483-1.363,0.643-2.589,1.26-3.787c2.067-4.012,5.573-7.195,9.742-9.089c1.661-0.754,3.493-1.167,5.375-1.683C29.917,6.045,31.383,6.232,31.91,5.899z" />
      </svg>
    );
  }

  return (
    <svg className="ArobsLogo" viewBox="0 0 503.833 515.639" fill={fillColor}>
      <path d="M256.689,0.074c72.518-1.463,116.026,18.953,156.719,48.524c6.89,5.008,12.242,12.47,18.656,17.917c12.607,10.702,33.41,30.965,38.061,48.523c-0.248,0-0.499,0-0.747,0c-5.427-8.088-14.351-13.972-20.149-21.649c-26.518-35.108-73.707-56.704-123.137-69.427c-31.211-8.034-80.237-3.476-106.718,5.227C149.151,52.265,97.656,96.876,76.087,168.79c-7.951,26.507-11.342,70.581-2.985,100.037c17.663,62.253,55.469,100.444,117.913,117.95c21.877,6.132,56.124,3.609,74.627-2.984c6.063-2.162,10.862-2.128,16.42-4.482c36.146-15.301,58.897-40.072,73.881-76.892c8.035-19.738,13.27-55.378,5.225-79.878c-4.931-15.011-11.266-30.353-19.401-42.552c-5.032-7.541-12.894-13.446-17.915-20.903c0.5,0,0.996,0,1.495,0c2.736,2.62,6.316,3.114,9.701,5.226c4.946,3.082,9.446,7.616,14.18,11.198c4.07,3.08,7.352,8.566,10.448,12.69c2.515,3.353,6.513,6.237,8.955,9.705c9.826,13.961,18.051,29.945,23.881,47.778c11.893,36.384,1.637,82.792-10.448,110.487c-24.571,56.312-66.388,84.004-129.853,101.528c-21.163,5.844-58.324,8.662-82.091,2.239c-30.248-8.176-52.443-20.273-75.375-35.086c-7.031-4.544-12.781-12.162-19.404-17.173c-28.846-21.809-48.762-55.9-63.434-91.822c-3.174-7.771-3.466-15.467-5.97-23.889c-5.661-19.035-8.454-57.514-2.986-79.879c3.678-15.043,5.667-30.354,11.195-44.045c20.628-51.094,51.836-91.55,94.777-120.192c24.85-16.574,54.272-28.421,85.822-38.072c14.284-4.37,29.724-4.753,44.778-8.212C244.664,0.386,252.648,2.611,256.689,0.074zM283.554,52.332c26.721-0.529,50.652,0.945,70.149,8.211c67.984,25.335,117.836,77.969,141.049,148.559c10.48,31.87,13.054,86.242,1.492,120.191c-10.641,31.243-23.219,58.94-41.048,82.864c-28.301,37.983-70.256,64.976-117.165,84.358c-15.726,6.5-31.393,7.779-49.254,12.69c-31.929,8.785-83.072,8.604-114.181-0.744c-28.816-8.66-50.841-21.257-73.136-35.835c-1.244-0.248-14.949-11.927-20.896-16.422c-15.178-11.483-27.083-26.085-38.06-41.806c-3.608-5.171-8.621-10.299-10.448-17.172c0.25,0,0.499,0,0.748,0c6.311,10.29,16.941,19.188,25.373,27.623c18.117,18.119,38.191,36.237,62.688,47.776c15.497,7.301,32.14,11.706,49.254,17.17c5.473,0.747,10.946,1.492,16.418,2.242c32.799,7.821,75.494,1.186,101.497-7.469c59.68-19.86,104.339-56.13,131.343-108.247c5.646-10.895,6.297-22.349,10.448-35.084c8.075-24.78,9.03-69.736,1.495-96.303c-16.922-59.628-54.579-98.828-114.185-115.712c-8.408-2.384-15.969-0.976-25.373-2.987c-13.915-2.975-32.903-0.036-44.03,2.987c-35.102,9.537-57.455,21.494-78.359,44.792c-9.01,10.042-13.526,22.512-19.404,35.834c-8.583,19.456-15.739,56.783-6.716,82.118c6.004,16.857,12.162,32.888,21.643,46.285c4.31,6.089,10.77,10.99,14.926,17.17c-0.498,0-0.996,0-1.492,0c-2.312-2.798-6.611-3.174-9.702-5.228c-3.73-2.474-7.589-6.038-11.194-8.955c-13.342-10.795-28.504-32.559-36.568-48.527c-5.582-11.052-8.781-24.535-11.94-37.325c-5.53-22.384-0.75-54.083,5.224-70.919c4.29-12.091,5.71-22.968,11.194-33.595c18.364-35.59,49.524-63.824,86.567-80.625c14.761-6.693,31.036-10.354,47.764-14.93C265.845,53.627,278.867,55.282,283.554,52.332z" />
    </svg>
  );
};

ArobsLogo.propTypes = {
  fillColor: PropTypes.string.isRequired,
  includeText: PropTypes.bool.isRequired,
};

ArobsLogo.defaultProps = {
  fillColor: "#ffffff",
  includeText: false,
};

export default ArobsLogo;
