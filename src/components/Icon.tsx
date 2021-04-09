import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../icons', true, /\.svg$/));
} catch (error) {
  console.log(error)
}

// type Props = {
//   name?: string
// } & React.SVGAttributes<SVGAElement>

const Icon = (props: any)=>{
  const {name, children, className, ...rest} = props
  return(
    <svg className={`icon ${className? className:''}`} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  )
}

export default Icon;
