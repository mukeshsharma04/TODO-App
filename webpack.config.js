module.exports  = {
  entry : {
    jsx : './app/app.jsx',
  },
  output : {
    path : __dirname,
    filename : './public/bundle.js'
  },
  resolve : {
    alias : {
      applicationStyles : './app/styles/app.scss'
    },
    extensions : ['.','.js','.jsx']
  },
  module : {
    loaders : [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.js?$/, options : { presets : ['react','es2015','babel-preset-stage-1']}, loader: "babel-loader"},
      { test: /\.jsx?$/, options : { presets : ['react','es2015','babel-preset-stage-1']}, loader: "babel-loader"},
      {test: /\.png$/, loader: "url-loader?limit=100000"},
      {test: /\.jpg$/, loader: "file-loader" },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ],

  },
  devtool : 'cheap-module-eval-source-map'
};
