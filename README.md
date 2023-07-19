# SAP - Green Team Waste Dashboard

# Description

The SAP Green Team Waste Dashboard is a data visualization tool designed to provide valuable insights into waste management and disposal practices at the SAP Vancouver Office. It serves as a tool for monitoring waste-related metrics, allowing employees to make informed decisions and drive improvements in waste management processes.

# Built With

- [React.js](https://react.dev/)
- [Node.js](https://nodejs.org/en)
- [Tremor.so](https://www.tremor.so/docs/getting-started/installation)
- [Tailwind](https://tailwindcss.com/docs/installation)
- [Material Tailwind UI](https://www.material-tailwind.com/docs/react/installation)
- [Hero Icons](https://heroicons.com/)

# Installation and Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Understanding the Code

### Displayed Month

To change the month displayed on first load, find `const updatedMonth = "may"` in App.js. Replace the string with the desired month in lowercase. This line can be quickly found by searching `!NOTE` in your IDE.

```
App.js

const updatedMonth = "may";
```

`updatedMonth` is used throughout the entire dashboard to pass the desired month to be displayed. Once the string is replaced, the dashboard data should update automatically.

#### Future Plans - Automatically Update the Month

Once the JSON is consistently kept up to date, the following can be used to replace the string as a way to automatically switch to the latest month.

```
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    const updatedMonth = date.toLocaleString("default", { month: "long" }).toLowerCase();
```

Since the data is typically a month behind the current month, this would automatically display data from the previous month. After automating the month display string, only the JSON file would need to be manually updated.


### JSON

Monthly Waste Data is obtained from SAP directly in the form of a spreadsheet, and it is typically updated once a month.

All keys in `monthlyData2023.json` corresponds to the spreadsheet rows and names. The following array template has been completed for all months, and only requires updating the value.

```
{
    "id": 9,
    "month": "september",
    "rigidsRefundableAndNon": 0,
    "mixedPaperFiber": 0,
    "confidentialPaper": 0,
    "compost": 0,
    "coffeeGrounds": 0,
    "eWasteDesktop": 0,
    "eWasteDataCentre": 0,
    "itDonations": 0,
    "furnitureAndMisc": 0,
    "pensHighlighter": 0,
    "batteriesCD": 0,
    "metalWoodPaint": 0,
    "tubesBulbs": 0,
    "tonerCartridges": 0,
    "garbage": 0,
    "total": 0,
    "diverted": 0
},
```


# License

### Apache
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    Copyright 2023 Temor.so
    
### BSD (Berkeley Software Distribution)

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    Copyright (c) 2013-present, Meta

### MIT  (Massachusetts Institute of Technology)

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the     “Software”), to deal in the Software without restriction, 
    including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
    of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN 
    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    Copyright (c) 2013-present, Meta


# Contact(s)

- SAP Green Team Lead
    - Geoffrey Fu / geofffrey.fu@sap.com
  
- Development
    - Marlowe Cheng / marlowe.cheng@gmail.com
  
    - Dave Koo / davekoo93@gmail.com

- Product Design
    - Christopher Poirier / christopher.p.poirier@gmail.com
      
- User Interface Design
    - Anisha Bhalla / bhalla.anishak@gmail.com
      
    - Joshwel Licerio / liceriojj@gmail.com
      
    - Tiffany Ng / trickdat64@gmail.com
