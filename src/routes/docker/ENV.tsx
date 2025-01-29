
const ENV = () => {
    // @ts-ignore
    const key = import.meta.env.health_check
    return <>
        <div className="env">
            {key}
        </div>
    </>
};


export default ENV;