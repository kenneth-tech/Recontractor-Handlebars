const fetch = require('node-fetch');
const URI = 'http://localhost:2108/api';

exports.clientprofile = async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      responseType: 'json',
    },
  };

  const response = await fetch(
    `${URI}/client/info/618174b1fd1d0cc18b2a0083`,
    options
  );
  const resData = await response.json();
  console.log(resData);
  const { FirstName, LastName, Address, EmailAddress } = resData.data;
  res.render('client/clientprofile', {
    layout: 'client/clientprofile',
    Fullname: `${FirstName} ${LastName}`,
    Address: Address,
    EmailAddress: EmailAddress,
  });
};
exports.clientprofile = async (req, res) => {
  res.render('client/clientprofile', {
    layout: 'client/clientprofile',
  });
};

exports.login = async (req, res) => {
  res.render('/client/clientprofile', {
    layout: '/client/clientprofile.layout',
  });
};

exports.homepage = async (req, res) => {
  res.render('client/home', {
    layout: 'client/home',
  });
};
exports.contractorlist = async (req, res) => {
  res.render('client/contractorlist', {
    layout: 'client/contractorlist',
  });
};

exports.renderSignup = async (req, res) => {
  res.render('client/signup', {
    layout: 'client/signup',
  });
};
exports.viewprofile = async (req, res) => {
  res.render('client/viewprofile', {
    layout: 'client/viewprofile',
  });
};
exports.updateprofile = async (req, res) => {
  res.render('client/profileupdate', {
    layout: 'client/profileupdate',
  });
};
exports.search = async (req, res) => {
  res.render('client/search', {
    layout: 'client/search',
  });
};

exports.register = async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      responseType: 'json',
    },
    body: JSON.stringify({
      UserName: req.body.Username,
      FirstName: req.body.Firstname,
      LastName: req.body.Lastname,
      EmailAddress: req.body.Emailaddress,
      Address: req.body.Address,
      Password: req.body.Password,
    }),
  };

  const response = await fetch(`${URI}/add/client`, options);
  const resData = await response.json();
  console.log(resData);
  if (response.status === 200) {
    res.render('client/signup', {
      layout: 'client/signup',
      resData: resData,
      success: true,
      message: resData.message,
    });
  } else {
    res.render('client/signup', {
      layout: 'client/signup',
      resData: resData,
      success: true,
    });
  }
};

exports.login = async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      responseType: 'json',
    },
    body: JSON.stringify({
      EmailAddress: req.body.EmailAddress,
      Password: req.body.Password,
    }),
  };
  const response = await fetch(`${URI}/client/login`, options);
  const resData = await response.json();
  console.log(resData);
  if (response.status === 200) {
    res.render('client/clientprofile', {
      layout: 'client/clientprofile',
      resData: resData,
      success: true,
      message: resData.message,
    });
  } else {
    res.render('client/signup', {
      layout: 'client/signup',
      resData: resData,
      success: true,
    });
  }
};
