/**
 * 用于二级页返回
 */
export default function useNavbar() {
    const router = useRouter()
    const title=ref('')

    function useTitle(ititle) {
        title.value=ititle
        function setTitle(itext) {
            title.value=itext
        }
        return [title,setTitle]
    }
    function back() {
        router.go(-1);
    }
    return {
        back,
        useTitle
    }
}