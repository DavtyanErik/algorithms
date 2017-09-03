// @flow

const hanoi = (disks: number) => {
	const hanoiHelper = (
		disks: number,
		start: number,
		helper: number,
		end: number
	) => {
		if (disks === 1) {
			console.log(`${start} -> ${end}`);
		} else {
			hanoiHelper(disks - 1, start, end, helper);
			hanoiHelper(1, start, helper, end);
			hanoiHelper(disks - 1, helper, start, end);
		}
	};
	hanoiHelper(disks, 1, 2, 3);
};
