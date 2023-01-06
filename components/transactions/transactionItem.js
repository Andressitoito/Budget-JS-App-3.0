import BaseButton from "../interaction/Base-button";

const TransactionItem = () => {
	return (
		<div className="relative bg-msk-200 rounded-md">
			<div className="bg-msk-300 relative text-xs rounded-md m-1">
				<p className="bg-msk-600 right-0 rounded-sm top-[-5px]">username</p>
				<div className="flex justify-between">
					<p>TransactionItem Name</p>
					<p>Item Date</p>
				</div>
    <div className="flex justify-between">
<BaseButton text={'Edit'} xs p_xs/>
				<p className="text-xl">Item Price</p>
<BaseButton text={'Delete'} xs p_xs danger/>
    </div>
			</div>
{/* 
			<div className="absolute top-[2px] right-[-70px]">
				<TransactionItemActions />
			</div> */}
		</div>
	);
};

export default TransactionItem;
