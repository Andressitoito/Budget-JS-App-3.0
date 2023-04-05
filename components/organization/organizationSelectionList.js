const OrganizationSelectionList = () => {
	return (
		<>
			<div className="bg-msk-800 rounded-md flex flex-col gap-1 py-2 p-1 mx-auto w-96">
				<div className="relative bg-msk-200 rounded-md">
					<div className="bg-msk-300 relative text-2xl md:text-xl rounded-md m-1">
						<p className="bg-msk-600 txt-msk-100 text-center text-3xl right-0 rounded-sm top-[-5px] font-bold">
							Andresitos
						</p>
						<p className="bg-blue-200 w-full text-xl md:text-md text-blue-900">
							Owner:{" "}
							<span className="font-semibold italic text-blue-800">
								Andres Ledesma
							</span>
						</p>
						<p className="w-full text-blue-900">
							Users:{" "}
							<span className="font-semibold italic text-blue-800">
								Andres Ledesma
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default OrganizationSelectionList;
