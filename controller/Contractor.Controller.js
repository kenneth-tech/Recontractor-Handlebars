const fetch = require('node-fetch');
const URI = 'http://localhost:2108/api';

exports.rendercontractorupdate = async (req, res) => {
  res.render('contractor/contractorupdate', {
    layout: 'contractor/contractorupdate',
  });
};
exports.rendercontractorprofile = async (req, res) => {
  res.render('contractor/contractorprofile', {
    layout: 'contractor/contractorprofile',
  });
};
exports.renderRegister = async (req, res) => {
  res.render('contractor/contractorsignup', {
    layout: 'contractor/contractorsignup',
  });
};
exports.contractorregister = async (req, res) => {
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

  const response = await fetch(`${URI}/add/contractor`, options);
  const resData = await response.json();
  console.log(resData);
  if (response.status === 200) {
    res.render('contractor/contractorsignup', {
      layout: 'contractor/contractorsignup',
      resData: resData,
      success: true,
      message: resData.message,
    });
  } else {
    res.render('contractor/contractorsignup', {
      layout: 'contractor/contractorsignup',
      resData: resData,
      success: true,
    });
  }
};

exports.houseupload = async (req, res) => {
  const pathImages = [];
  for (let i = 0; i < req.files.length; i++) {
    pathImages.push(req.files[i].path);
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      responseType: 'json',
    },
    body: JSON.stringify({
      Price: req.body.price,
      houseType: req.body.housetype,
      pathImages: pathImages,
    }),
  };
  console.log(req.body);

  const response = await fetch(`${URI}/bulk`, options);
  const resData = await response.json();
  console.log(resData);
  if (response.status === 200) {
    res.render('contractor/contractorprofile', {
      layout: 'contractor/contractorprofile',
      resData: resData,
      success: true,
      message: resData.message,
    });
  } else {
    res.render('contractor/contractorupdate', {
      layout: 'contractor/contractorupdate',
      resData: resData,
      success: true,
    });
  }
};
