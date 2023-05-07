
export function MyProfile() {
    return (
        <form method="POST" action="/api/save_profile">
            <div>
                <input
                    class=""
                    name="sex"
                    type="text"
                    placeholder=""
                />
                <input
                    class=""
                    name="weight"
                    type="number"
                    placeholder=""
                />
                <input
                    class=""
                    name="height"
                    type=""
                    placeholder=""
                />
                <input
                    class=""
                    name="age"
                    type="number"
                    placeholder=""
                />
                <input
                    class=""
                    name="tdee"
                    type="hidden"
                    placeholder=""
                />
            </div>
        </form>
    );
}