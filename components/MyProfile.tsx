
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
                    type="number"
                    placeholder="In inches - ie 63 for 5 foot 3 inches"
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
                    placeholder="💾Save Profile"
                />
                <input
                    value=""
                    type="submit"
                    class="rounded hover:bg-blue-300 bg-blue-200 p-2 border(blue-500 2) mt-4 mb-2"
                />
            </div>
        </form>
    );
}