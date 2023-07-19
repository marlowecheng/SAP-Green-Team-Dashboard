export function calcCascadeData(currMonthData, prevMonthData) {
    // ======= Cascade Recovery Data ========
	// Get current month's Cascade Recovery data
	const currCascadeData = currMonthData.rigidsRefundableAndNon + currMonthData.mixedPaperFiber + currMonthData.confidentialPaper;

	// Get previous month's Cascade Recovery data
	let prevCascadeData = prevMonthData.rigidsRefundableAndNon + prevMonthData.mixedPaperFiber + prevMonthData.confidentialPaper;

	// Calculate the difference in percentage
	const compareCascadeData = parseFloat(((currCascadeData - prevCascadeData) / currCascadeData) * 100).toFixed(1);

    return compareCascadeData;
  }
  
  export function calcEcoData(currMonthData, prevMonthData) {
	// Get current month's EcoAction data
	const currEcoData = currMonthData.coffeeGrounds + currMonthData.compost;

	// Get previous month's EcoAction data
	let prevEcoData = prevMonthData.coffeeGrounds + prevMonthData.compost;

	// Calculate the difference in percentage
	const compareEcoData = parseFloat(((currEcoData - prevEcoData) / currEcoData) * 100).toFixed(1);

    return compareEcoData;
  }
  
  export function calcLandfillData(currMonthData, prevMonthData) {
	const currLandfillData = currMonthData.garbage;

	let prevLandfillData = prevMonthData.garbage;

	const compareLandfillData = parseFloat(((currLandfillData - prevLandfillData) / currLandfillData) * 100).toFixed(1);

    return compareLandfillData;
  }
  
  export function calcRefundablesData(currMonthData, prevMonthData) {
	const currRefundablesData = currMonthData.rigidsRefundableAndNon;

	let prevRefundablesData = prevMonthData.rigidsRefundableAndNon;

	const compareRefundablesData = parseFloat(((currRefundablesData - prevRefundablesData) / currRefundablesData) * 100).toFixed(1);

    return compareRefundablesData;
  }
  